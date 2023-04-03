import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { useState } from "react";
import axios from "axios";
const config = require('./config');

const Login = () => {
    const navigate = useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = (e) => {
       
        
        e.preventDefault()
      console.log(username,password)
    if(username && password)
    {
      axios.post(`${config.apiUrl}login/`,{
        username:username,
        password:password
      }).then((res)=>
      {
         console.log(res);
         if(res.data.admin)   navigate("/mainPage")
         else navigate("/booking")
        
      }).catch((err)=>
      {
        console.log(err);
      })
    }else alert("All fileds are required");
        
        
       
    }

    return (
        <>
            <Navbar />
            <div className="loginPage">
                <div className="container">
                    <span className="title">Sign In</span>
                    <form onSubmit={handleSubmit} >
                        <input type="username" placeholder="Username"  value={username} onChange={(e)=>setUserName(e.target.value)}/>
                        <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;