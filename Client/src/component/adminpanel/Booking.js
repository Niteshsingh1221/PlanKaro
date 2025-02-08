import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Booking = () => {
  
  const [bookingdetails, setBookingDetails] = useState([]);
  const [userSearch, searchUser] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get(
        "http://localhost:8080/bookingdetails/getallbooking"
      );
      console.log(response.data, "response");

      setBookingDetails(response.data);
    };
    fetchLocation();

  }, []);


  const filteredBooking = bookingdetails.filter(user =>
    user.username.toLowerCase().includes(userSearch.toLowerCase())
  );


  return (
    <div className='admin-booking'>

    <div className='admin-booking-heading'>
    Booking Details
  </div>
  <div className="admin-booking-searchbox">
        <input
          type="text"
          placeholder="Search by Fullname"
          // value={userSearch}
          // onChange={(e) => searchUser(e.target.value)}
        />
      </div>

      <table className='admin-booking-table'>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>MobileNumber</th>
            <th>LocationName</th>
            <th>HotelName</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooking.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.username}</td>
                <td>{value.personemail}</td>
                <td>{value.personphone}</td>
                <td>{value.hoteladdress}</td>
                <td>{value.hotelname}</td>

              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Booking