import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import User from './User';
import "./Staff.scss"
import {Box,Modal,TextField,Stack} from "@mui/material"

const Staff = () => {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,

  };
  const staffListArray=
  [
    {
        "id": 1,
        "password": "pbkdf2_sha256$320000$NxdM4VUyFculV0HhH0ZHC7$540BQqAzFGxlBkVIxIxedHLGqbOLq/E5xt2VdewTb6c=",
        "last_login": "2023-04-01T19:24:41.509461Z",
        "is_superuser": true,
        "username": "abhay",
        "first_name": "Abhay",
        "last_name": "",
        "email": "hms@mail.com",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2023-04-01T17:58:20.670070Z",
        "groups": [],
        "user_permissions": []
    },
    {
        "id": 2,
        "password": "nitesh",
        "last_login": null,
        "is_superuser": false,
        "username": "nitesh",
        "first_name": "Nitesh",
        "last_name": "",
        "email": "",
        "is_staff": false,
        "is_active": false,
        "date_joined": "2023-04-01T19:25:57.543242Z",
        "groups": [],
        "user_permissions": []
    },
    {
        "id": 3,
        "password": "sameer",
        "last_login": null,
        "is_superuser": false,
        "username": "sameer",
        "first_name": "Sameer",
        "last_name": "Kumar",
        "email": "",
        "is_staff": true,
        "is_active": false,
        "date_joined": "2023-04-02T13:30:00Z",
        "groups": [],
        "user_permissions": []
    },
    {
        "id": 4,
        "password": "sameer2",
        "last_login": null,
        "is_superuser": false,
        "username": "sameer2",
        "first_name": "Sameer2",
        "last_name": "Kumar",
        "email": "",
        "is_staff": true,
        "is_active": false,
        "date_joined": "2023-04-02T13:30:00Z",
        "groups": [],
        "user_permissions": []
    },
    {
        "id": 5,
        "password": "chandan1",
        "last_login": null,
        "is_superuser": false,
        "username": "chandan1",
        "first_name": "Chandan",
        "last_name": "Kumar",
        "email": "",
        "is_staff": true,
        "is_active": false,
        "date_joined": "2023-04-02T08:02:27.770687Z",
        "groups": [],
        "user_permissions": []
    },
    {
        "id": 6,
        "password": "abhay1",
        "last_login": null,
        "is_superuser": false,
        "username": "abhay1",
        "first_name": "abhay",
        "last_name": "padhy",
        "email": "",
        "is_staff": true,
        "is_active": false,
        "date_joined": "2023-04-02T08:02:51.967626Z",
        "groups": [],
        "user_permissions": []
    }
]
  const token = localStorage.getItem("auth_token");
  const [open,setOpen]=useState(false);
  const [name,setName]=useState("");
  const [date,setDate]=useState("");
  const [staffList,setStaffList]=useState(staffListArray);
  const handleClose=()=>
  {
    setOpen(false);
  }
  const handleOpen=()=>
  {
    setOpen(true);
  }
  console.log(token)
   const getStaffDetails=()=>


   {
        axios.get('https://sebackend.onrender.com/api/customer/',
        {

          headers: {"Authorization" : `Bearer ${token}` }
          }).then(res=>
            {
              console.log(res)
            })
            .catch((err)=>{
              console.log(err);
            })
   }
   useEffect(()=>
   {
    getStaffDetails();
   })
  const AddStaff=(e)=>
  {

    e.preventDefault();
    console.log(name,date)
    console.log("staff is added");
  }
  return (
    <div className='main_container'>
      <div className='header_container'>
        <h1>Staff List</h1>
        <div className='addNewStaff'>
            <button onClick={handleOpen}>Add</button>
            {open && <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <form onSubmit={AddStaff}>
                      <Box sx={style} >
                        <div style={{
                          display: "flex",
                          flexDirection: "column",
                          rowGap: 20
                        }}>
                          <div>
                            <Stack spacing={3}>
                              <div>
                                <span>Add new Staff</span>
                              </div>
                              <TextField sx={{ flex: 1 }} defaultValue="" value={name}label="Name of the staff" onChange={(e)=>setName(e.target.value)} helperText="Enter Name">
                              
                              </TextField>
                              
                              <TextField sx={{ flex: 1 }}
                              type={"date"}
                               onChange={(e)=>setDate(e.target.value)} helperText="Enter Joinig Date" />
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
      </div>
      <div className='staff_container'>
        {
          staffList.map((item)=>
          (
            <User id={item.id}  status={item.is_staff} name={item.first_name} date_of_joining={item.date_joined}/>
          ))
        }
         
      </div>
    </div>
  )
}

export default Staff