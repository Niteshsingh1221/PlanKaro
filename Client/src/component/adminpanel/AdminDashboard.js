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

export default AdminDashboard;