// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
// import Hotel from '../Hotel/Hotel';

const AdminDashboard = () => {
  return (
    <div className='admin-container'>
      <nav className="navbar">
        <div className="navbar-logo"  >
          <h2>Admin</h2>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
          <li><Link to="/location">Manage Location</Link></li>


          <li><Link to="/hotel">Hotel</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>

      {/* <div className='container'> */}
        {/* <img src="../../../lib/admin.webp" alt="" /> */}
      <div class="center-div">
        <h2>Welcome to Admin Page</h2>
      </div>
      {/* </div> */}

    </div>
  );
};

export default AdminDashboard;
