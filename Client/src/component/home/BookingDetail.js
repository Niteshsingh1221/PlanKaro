import axios from "axios";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";


const BookingDetail = () => {
    const [bookingdetails, setBookingDetails] = useState([])


   
    useEffect(() => {
        let users = JSON.parse(localStorage.getItem("user"));
        const fetch = async () => {
            const response = await axios.get(`http://localhost:8080/bookingdetails/getBookingByusername/${users.username}`)
            console.log(response);
            setBookingDetails(response.data)
        }
      fetch();



    }, []);


    return (
        <div className='dashboard'>
            <Navbar />
          <div className='dashboard-heading'>
            Booking Details
          </div>
          {/* <div className="dashboard-searchbox">
            <input
              type="text"
              placeholder="Search by Fullname"
            />
          </div> */}
    
          <table className='dashboard-user-table'>
            <thead>
              <tr>
                <th>HotelName</th>
                <th>Email</th>
                <th>MobileNo</th>
                <th>CheckInDate</th>
                <th>CheckOutDate</th>
                <th>Location</th>
                <th>Amout</th>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {bookingdetails.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.hotelname}</td>
                    <td>{value.personemail}</td>
                    <td>{value.personphone}</td>
                    <td>{value.checkindate}</td>
                    <td>{value.checkoutdate}</td>
                    <td>{value.location}</td>
                    <td>{value.totalamount}</td>
              <td><button className="location-delete-button"  >Delete</button></td>

    
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="footer footer-bottom">
            <Footer />
          </div>
        </div>
      )
}
export default BookingDetail;  //exporting the component