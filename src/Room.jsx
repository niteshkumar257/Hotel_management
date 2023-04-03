import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import DataTable from "./Component/DataTable";
import Chart from './Component/Chart';
import TextField from '@mui/material/TextField';
import {Box,Modal,Stack,MenuItem} from '@mui/material'
const config = require('./config');


const row=[
  {
      "id": 1,
      "room_no": "1",
      "capacity": 100,
      "room_status": "available"
  },
  {
      "id": 2,
      "room_no": "2",
      "capacity": 5,
      "room_status": "not available"
  },
  {
      "id": 3,
      "room_no": "3",
      "capacity": 4,
      "room_status": "available"
  },
  {
      "id": 4,
      "room_no": "4",
      "capacity": 2,
      "room_status": "available"
  },
  {
      "id": 5,
      "room_no": "5",
      "capacity": 3,
      "room_status": "available"
  },
  {
      "id": 6,
      "room_no": "6",
      "capacity": 10,
      "room_status": "not available"
  },
  {
      "id": 7,
      "room_no": "7",
      "capacity": 5,
      "room_status": "available"
  },
  {
      "id": 8,
      "room_no": "8",
      "capacity": 5,
      "room_status": "not available"
  },
  {
      "id": 9,
      "room_no": "9",
      "capacity": 3,
      "room_status": "available"
  }
]
const choices=[
 {  value:"available",
   lable:"Avialable"},
   {
    value:"not available",
   lable:"Not Avialable"
   }

]
const Room = () => {
  const [rows,setRows]=useState([]);
  const [room,setRoom]=useState("");
  const [capacity,setCapacity]=useState("");
  const [roomStatus,setRoomStatus]=useState("");
  const [open,setOpen]=useState(false)
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 350,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,

  };
    const columns = [
    { field: 'id', headerName: 'ID', width: 90, flex:1, },
    {
      field: 'room_no',
      headerName: 'Room No',
      width: 150,
      flex:1,
      editable: true,
      headerAlign: "left", align: "left"
    },
    {
      field: 'capacity',
      headerName: 'Capacity',
      width: 150,
      flex:1,
      editable: true,
      headerAlign: "left", align: "left"
    },
    {
      field: 'room_status',
      headerName: 'Room Status',
      type: 'number',
      width: 110, flex:1,
      editable: true,
      headerAlign: "left", align: "left"
    },
    
  ];
 
  const handleClose=()=>
  {
    setOpen(false);
  }
  const handleOpen=()=>
  {
    setOpen(true);
  }

  const token = localStorage.getItem("auth_token");
  const getData=()=>
  {
    axios.get(`${config.apiUrl}api/roomno/`,
    
    ).then(res=>
        {
          console.log(res.data);
          setRows(res.data);

        })
        .catch((err)=>{
          console.log(err);
        })
  }
  useEffect(()=>
  {
       getData();   
  },[])
     
  // post request 
  const addNewRoomHandler=(e)=>
  {
    e.preventDefault();
    setOpen(false);

    if(room && capacity && roomStatus)
    {
      console.log(room,capacity,roomStatus)
      e.preventDefault();
      axios.post(`${config.apiUrl}api/roomno/`,{
        room_no:room,
        capacity:capacity,
        room_status:roomStatus
      }).then((res)=>
      {
        console.log(res);
        
      }).catch(err=>
        {
          console.log(err);
        })
      }
    else console.log("else all fileds are required");

    getData();
  }
  
  
  return (
    <Box  sx={{
      display:"flex",
     
    
       flexDirection:"column",
      rowGap:10
    }} >
      <div  className="Analysis_container">


       <div className="heading_container">
       <h1>Hotel Rooms</h1>
       </div>
       <div className="add_new">
       
      
       <button className='btn' onClick={handleOpen}> Add </button>
       {open && <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <form onSubmit={addNewRoomHandler}>
                      <Box sx={style} >
                        <div style={{
                          display: "flex",
                          flexDirection: "column",
                          rowGap: 20
                        }}>
                          <div>
                            <Stack spacing={3}>
                              <div>
                                <span>Add new Room</span>
                              </div>
                              <TextField 
        value={room}
        onChange={(e)=>setRoom(e.target.value)}
         id="outlined-basic" 
         label="Room NO"
          variant="outlined" />
       <TextField 
       value={capacity}
       onChange={(e)=>setCapacity(e.target.value)}
       id="outlined-basic"
        label="Capacity"
         variant="outlined" 
         />
         <TextField
           value={roomStatus}
           onChange={(e)=>setRoomStatus(e.target.value)
          }
           id="outlined-basic"
            label="Room Status"
             variant="outlined"
             select
         >
        {choices.map((option)=>(
            <MenuItem key={option.value} value={option.value}>
            {option.lable}
          </MenuItem>
        ))}
         </TextField>
       
                            </Stack>
                          </div>
                          <div style={{
                            display: "flex",
                            justifyContent: "flex-end"
                          }}>
                            <button
                              style={{
                                width: 150,
                                height: 54,
                                backgroundColor: "#08B3F3",
                                border: "none",
                                borderRadius: 9,
                                fontSize: "1.1rem",
                                backgroundColor: "#1377C0",
                                color: "white",
                                textDecoration: "none",
                                cursor: "pointer"
                              }}>Submit</button>
                          </div>
                        </div>
                      </Box>
                    </form>
                  </Modal>}
       </div>
    
      <div className="content_container">
      <DataTable columns={columns} rows={rows}/>
     
      </div>
    
      </div>
      
     
      
    </Box>
  )
}

export default Room