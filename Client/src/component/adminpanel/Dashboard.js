import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Dashboard = () => {

  const [userdetails, setUserDetails] = useState([]);
  const [userSearch, searchUser] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get(
        "http://localhost:8080/users/getAll"
      );
      console.log(response.data, "response");

      setUserDetails(response.data);
    };
    fetchLocation();

  }, []);

  const filteredUsers = userdetails.filter(user =>
    user.fullname.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div className='dashboard'>
      <div className='dashboard-heading'>
        Dashboard
      </div>
      <div className="dashboard-searchbox">
        <input
          type="text"
          placeholder="Search by Fullname"
          value={userSearch}
          onChange={(e) => searchUser(e.target.value)}
        />
      </div>

      <table className='dashboard-user-table'>
        <thead>
          <tr>
            <th>UserName</th>
            <th>FullName</th>
            <th>Email</th>
            <th>MobileNumber</th>
            <th>DateOfBirth</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.username}</td>
                <td>{value.fullname}</td>
                <td>{value.email}</td>
                <td>{value.mobile_no}</td>
                <td>{value.dateofbirth}</td>
                <td>{value.gender}</td>

              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard