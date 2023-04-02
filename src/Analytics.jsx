import * as React from 'react';
import Box from '@mui/material/Box';
import { useState ,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import DataTable from "./Component/DataTable"

import Chart from './Component/Chart';
import Chart1 from './Component/Chart1';
import "./Analytics.scss"
import TextField from '@mui/material/TextField';
import { Modal,Stack,MenuItem } from '@mui/material';
const months=[
  {value:"Jan",label:"Jan"},
  {value:"Feb",label:"Feb"},
  {value:"March",label:"March"},
  {value:"April",label:"April"},
  {value:"May",label:"May"},
  {value:"June",label:"June"},
  {value:"July",label:"July"},
  {value:"Aug",label:"Aug"},
  {value:"Sep",label:"Sep"},
  {value:"Oct",label:"Oct"},
  {value:"Nov",label:"Nov"},
  {value:"Dec",label:"Dec"},
]

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'month',
    headerName: 'Month',
    width: 150,
    flex:1,
    editable: true,
    headerAlign: "left", align: "left"
  },
  {
    field: 'year',
    headerName: 'Year',
    width: 150,
    editable: true,
    flex:1,
    headerAlign: "left", align: "left"
  },
  {
    field: 'expenditure',
    headerName: 'Expenditure',
    type: 'number',
    width: 110,
    editable: true,
    flex:1,
    headerAlign: "left", align: "left"
  },
  {
    field: 'number_of_guests',
    headerName: 'Number of Guests',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex:1,
    width: 160,
    headerAlign: "left", align: "left"
   
  },
];

const row=[
  {
      "id": 1,
      "month": "january",
      "year": 2023,
      "expenditure": 100000000,
      "number_of_guests": 300
  },
  {
      "id": 2,
      "month": "january",
      "year": 2024,
      "expenditure": 0,
      "number_of_guests": 0
  },
  {
      "id": 3,
      "month": "january",
      "year": 2024,
      "expenditure": 1222323,
      "number_of_guests": 232
  },
  {
      "id": 4,
      "month": "january",
      "year": 2023,
      "expenditure": 100000,
      "number_of_guests": 100
  },
  {
      "id": 5,
      "month": "february",
      "year": 2023,
      "expenditure": 20000,
      "number_of_guests": 200
  },
  {
      "id": 6,
      "month": "march",
      "year": 2024,
      "expenditure": 200000,
      "number_of_guests": 500
  },
  {
      "id": 7,
      "month": "august",
      "year": 2023,
      "expenditure": 1000000,
      "number_of_guests": 800
  },{
    "id": 8,
    "month": "march",
    "year": 2024,
    "expenditure": 200000,
    "number_of_guests": 500
},
{
    "id": 9,
    "month": "august",
    "year": 2023,
    "expenditure": 1000000,
    "number_of_guests": 800
}
]


export default function DataGridDemo() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,

  };
  const [rows,setRows]=useState(row);
  const [month,setMonth]=useState("");
  const [year,setYear]=useState("");
  const [guest,setGuest]=useState("");
  const [expenditure,setExpenditure]=useState("");
  const [open,setOpen]=useState(false);

  const token = localStorage.getItem("auth_token");
  console.log(token)
  useEffect(()=>
  {
    axios.get('https://sebackend.onrender.com/api/analytics/',{

    headers: {"Authorization" : `Bearer ${token}` }
    }).then((res)=>{
       console.log(res.data);
       setRows(rows)
    }).catch(err=>{
        console.log(err)   
     })
  },[])
  const addNewAnalytics=()=>
  {
      axios.post("api",{
        month:month,
        year:year,
        guest:guest,
        expenditure:expenditure
      }).then((res)=>
      {
        console.log(res);
      }).catch((err)=>
      {
        console.log(err)
      })
  }
  
  const handleClose=()=>
  {
    setOpen(false);
  }
  const handleOpen=()=>
  {
    setOpen(true);
  }
  const Addanalysis=(e)=>
  {
    e.preventDefault();
    setOpen(false);
     console.log(month,year,guest,expenditure);
  }
  return (
    <>
    <Box  sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
       flexDirection:"column",
      rowGap:10
    }} >
      <div  className="Analysis_container">


       <div className="heading_container">
       <h1>Hotel Analytics</h1>
       </div>
       <div className="add_new">
       
      
       <button className='btn' onClick={handleOpen}> Add </button>
       {open && <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <form onSubmit={Addanalysis}>
                      <Box sx={style} >
                        <div style={{
                          display: "flex",
                          flexDirection: "column",
                          rowGap: 20
                        }}>
                          <div>
                            <Stack spacing={3}>
                              <div>
                                <span>Add New Report</span>
                              </div>
          <TextField    value={month} select
        onChange={(e)=>setMonth(e.target.value)}
        id="outlined-basic"
         label="Month" 
         variant="outlined">
          {months.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
          </TextField>
      
          
          
          
       <TextField 
       value={year}
       onChange={(e)=>setYear(e.target.value)}
       id="outlined-basic"
        label="Year" 
        variant="outlined" />
       <TextField
       value={guest}
       onChange={(e)=>setGuest(e.target.value)}
       id="outlined-basic"
        label="Number Of Guest" variant="outlined" />
       <TextField 
       value={expenditure}
       onChange={(e)=>setExpenditure(e.target.value)}
       id="outlined-basic"
        label="Expenditure" 
        variant="outlined" />
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
      <Chart data={row} />
      <Chart1 data={row}/>
      </div>
    
      </div>
      
     
      
    </Box>
    <div>
   
    </div>
    </>
    
  );
}