// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import SideBar from './Sidebar';
import Dashboard from './Dashboard';
import Booking from './Booking';
import Location from './Location';
import Hotel from './Hotel';
// import Hotel from '../Hotel/Hotel';

const AdminDashboard = () => {

  const navigate = useNavigate();
  const [selectItem, setSelectItem] = useState("Dashboard");
  const [Name,setName] = useState(null)

  const handleSignOut = ()=>{
    // console.log("signout")
    localStorage.clear();
    navigate("/");
  }

  return (
    // <div className='admin-container'>
    //   <nav className="navbar">
    //     <div className="navbar-logo"  >
    //       <h2>Admin</h2>
    //     </div>
    //     <ul className="navbar-links">
    //       <li><Link to="/">Dashboard</Link></li>
    //       <li><Link to="/bookings">Bookings</Link></li>
    //       <li><Link to="/location">Manage Location</Link></li>


    //       <li><Link to="/hotel">Hotel</Link></li>
    //       <li><Link to="/settings">Settings</Link></li>
    //     </ul>
    //   </nav>

    //   {/* <div className='container'> */}
    //     {/* <img src="../../../lib/admin.webp" alt="" /> */}
    //   <div class="center-div">
    //     <h2>Welcome to Admin Page</h2>
    //   </div>
    //   {/* </div> */}

    // </div>
    <div className="HomeContainer">
      <section className="sidebar">
        <div>
          <div className="profile">
            <span className="logo">Admin</span>
            {/* {Name !== null ? Name : <div>Admin</div>} */}
          </div>
          <div className="items">
            <SideBar selectItem={selectItem} setSelectItem={setSelectItem} />
          </div>
        </div>  
        <div className="signOut" onClick={handleSignOut}>
            {/* {signOut} */}
            <span>Sign Out</span>
        </div>
      </section>
      <section className="mainContainer">
        {
        //   console.log(selectItem)
          selectItem === "Dashboard" ? (
            <Dashboard />
          ) : selectItem === "Booking" ? (
            <Booking />
          ) : selectItem === "Manage Location" ? (
            <Location />
          ) : (
            <Hotel />
          )
        }
      </section>
    </div>
  );
};

export default AdminDashboard;
