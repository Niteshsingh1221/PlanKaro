import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from "@mui/material";
import {ToastContainer,toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../authentication/Login.css";

const Login = () => {

  const navigate=useNavigate();

  const [login, setLogin]= useState({
    username: "",
    password: "",
  })
  const handleChange = (e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const handleSubmit=async (e)=>{
    const response = await axios.post("http://localhost:8080/users/login",{
      username:login.username,
      password:login.password
    })
    console.log(response,"clone")
    if(response.data.status===true){

      
   
      localStorage.setItem("user",JSON.stringify(response.data.user));
      if(response.data.user.username==="admin"){
        navigate("/admindashboard");
      }
      else{

      navigate("/")
      }
    }
    else{
      toast.error("Wrong Credentials",{position:"bottom-right",autoClose:5000})

  }
}
 

  return (
    <div className="login-container">
      <div className="login-background"></div>

      <div className="login-form-container">
        <h1 className="login-title">Plan Karo</h1>

        {/* User Avatar */}
          <div className="avatar">
        <Avatar sx={{bgcolor:'white'}}>
          <PersonIcon fontSize="large" sx={{ color: "#1976d2" }} />
        </Avatar>
      </div>

        {/* Login Form */}
        <form  action={handleSubmit} className="login-form">
          <input type="text" placeholder="Username" className="input-field" name ="username" onChange={handleChange} />
          <input type="password" placeholder="Password" className="input-field" name="password" onChange={handleChange} />

          <button type="submit" className="login-button">Login</button>

          <Link to='/register'  className="link">
            Don't have an account? Create one
          </Link>

          {/* Forgot Password and Google Sign-in */}
          <div className="actions">

            <Link to="/forgotpassword">
            
            <button type="button" className="forgot-password" >
              Forgot Password?
            </button>
            </Link >
          </div>
        </form>
      </div>

      <ToastContainer/>
    </div>
  );
}


export default Login;