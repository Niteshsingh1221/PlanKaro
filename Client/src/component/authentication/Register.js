import { useState } from "react"
import "./Register.css"
import Logo from "../../Utils/logo.png"
import { Link } from "react-router-dom";
import axios from "axios"
import {ToastContainer,toast} from 'react-toastify'



const Register = () => {

  const [user, setUser] = useState({
    username: "",
    fullname: "",
    dateofbirth: "",
    mobile_no: "",
    gender: "",
    email: "",
    password: ""


  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })

  }
  const handleSubmit = async (e) => {
    // console.log(e);
    // e.preventDefault();
    console.log("sending data", user)
    const response = await axios.post("http://localhost:8080/users/newuser", {
      username: user.username,
      fullname: user.fullname,
      dateofbirth: user.dateofbirth,
      mobile_no: user.mobile_no,
      gender: user.gender,
      email: user.email,
      password: user.password
    })
    console.log(response.data)
    if(response.data.status===true){
      toast.success("Registeration Successfull",{position:"bottom-right",autoClose:5000,pauseOnHover:true})
    }
    else{
      toast.error("Registeration Failed",{position:"bottom-right",autoClose:5000})

    }
  }

 




  return (

    // <>


      <div className='formContainer' >

        <form action={() => handleSubmit()}>

          <div className='heading'>
            <img src={Logo} alt='Logo' />
            {/* <h1>Plan Karo</h1> */}
          </div>
          <input
            type='text'
            placeholder='UserName'
            name='username'
            onChange={handleChange}
          />
          <input type="text" placeholder="FullName" max={15} min={6} onChange={handleChange} name='fullname' required></input>

          <input type="date" placeholder="DateOfBirth" onChange={handleChange} name='dateofbirth' required></input>

          <input type="text" placeholder="PhoneNo" onChange={handleChange} name='mobile_no' required></input>

          <div className="gender-container">

            <label>Gender:</label>
            <input type="radio" name="gender" value="MALE" onChange={handleChange} id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="FEMALE" onChange={handleChange} id="female" />
            <label htmlFor="female">Female</label>


          </div>


          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />

          <button type='submit'>Submit</button>
          <span>Already have an account?<Link to="/login">Login</Link></span>
        </form>
        <ToastContainer />
      </div>
    // {/* </> */}
  )
}

export default Register;

