import axios from "axios";
import { useState, useEffect } from "react";
import "./Booking.css";
import Footer from "../Footer";
import Navbar from "../home/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Booking = () => {
  const navigate = useNavigate();
  const hotelicon = <i className="fa-solid fa-hotel"></i>;
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [numRooms, setNumRooms] = useState(1);
  const [numGuests, setNumGuests] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [hotelPrice, setHotelPrice] = useState(0);
  const [hotelName, setHotelName] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    username: "",
    personemail: "",
    personphone: "",
    numofrooms: "",
    totalamount: "",
  });

  useEffect(() => {
    setHotelPrice(JSON.parse(sessionStorage.getItem("hotelprice")) || 0);
    setHotelName(JSON.parse(localStorage.getItem("hotelname")) || "");
  }, []);

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleGuestChange = (e) => {
    const guests = Math.max(1, parseInt(e.target.value, 10));
    setNumGuests(guests);
    setNumRooms(Math.ceil(guests / 2));
  };

  const handleRoomChange = (operation) => {
    setNumRooms((prev) => {
      const newRooms = operation === "+" ? prev + 1 : Math.max(1, prev - 1);
      return Math.max(newRooms, Math.ceil(numGuests / 2));
    });
  };

  useEffect(() => {
    if (checkinDate && checkoutDate && hotelPrice > 0) {
      const nights = Math.ceil(
        (new Date(checkoutDate) - new Date(checkinDate)) / (1000 * 60 * 60 * 24)
      );
      setTotalAmount(nights * hotelPrice * numRooms);
    }
  }, [checkinDate, checkoutDate, numRooms, hotelPrice]);

  const handleSubmit = async (e) => {
    const response = await axios.post(
      "http://localhost:8080/bookingdetails/addbookingdetail",
      {
        username: paymentDetails.username,
        personemail: paymentDetails.personemail,
        personphone: paymentDetails.personphone,
        numofrooms: paymentDetails.numofrooms,
        totalamount: totalAmount,
        hotelname: hotelName,
        checkindate: checkinDate,
        checkoutdate: checkoutDate,
        numofguests: numGuests,
      }
    );

    console.log(response.data,'hello');
    if (response.data === true) {
      toast.success("Booking Confirmed", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
        toast.error("Booking Failed", {
            position: "top-center",
            autoClose: 3000,
        });
    }
      setTimeout(()=>{
        navigate("/");
      },2000)
  };

  return (
    <div className="booking">
      <Navbar />
      <div className="bookingform">
        <div className="bookingheader">
          <h1>Enter Recipient Details</h1>
        </div>
        <div className="Form">
          <form action={() => handleSubmit()}>
            <div className="hotelicon">
              <h2>
                {hotelicon} {hotelName}
              </h2>
            </div>
            <div className="person-name">
              <label>
                User Name:
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Enter your Username"
                />
            </div>

            <div className="person-email">
              <label>
                Person Email:
                </label>
                <input
                  type="email"
                  name="personemail"
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
            </div>

            <div className="person-phone">
              <label>
                Person Phone:
                </label>
                <input
                  type="tel"
                  name="personphone"
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
            </div>

            <div className="checkin-date">
              <label>
                Check-In Date:
                </label>
                <input
                  type="date"
                  name="checkindate"
                  value={checkinDate}
                  onChange={(e) => setCheckinDate(e.target.value)}
                />
            </div>

            <div className="checkout-date">
              <label>
                Check-Out Date:
                </label>
                <input
                  type="date"
                  name="checkoutdate"
                  value={checkoutDate}
                  onChange={(e) => setCheckoutDate(e.target.value)}
                />
            </div>

            <div className="number-of-guests">
              <label>
                Number of Guests:
                </label>
                <input
                  type="number"
                  name="numofguest"
                  value={numGuests}
                  onChange={handleGuestChange}
                  min="1"
                />
            </div>

            <div className="max-occupancy">
              <p>Maximum Occupancy Of Each Room: 2</p>
            </div>

            <div className="number-of-rooms">
              <label>
                Number of Rooms:
              </label>
                <button type="button" onClick={() => handleRoomChange("-")}>
                  -
                </button>
                <span onChange={handleChange} name="numofroom">
                  {numRooms}
                </span>
                <button type="button" onClick={() => handleRoomChange("+")}>
                  +
                </button>
            </div>

            <div className="total-amount">
              <p name="totalamount" onChange={handleChange}>
                Total Amount: ${totalAmount}
              </p>
            </div>

            <div className="submit-button">
              <button type="submit">Confirm Booking</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Booking;
