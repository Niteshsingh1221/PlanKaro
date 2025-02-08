import axios from "axios";
import { useEffect, useState } from "react";
import "./BookHotel.css";
import Navbar from "../home/Navbar";
import Footer from "../Footer";

const BookHotel = () => {
  const [hoteldetails, setHotelDetails] = useState([]);
  useEffect(() => {
    const detail = JSON.parse(sessionStorage.getItem("details"));

    console.log(detail);

    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/hotels/location/${detail}`
        );
        console.log(response);

        setHotelDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="bookHotelContainer">
    <Navbar />
      <div className="bookHotel-heading">
        <h1>Hotels In The City</h1>
      </div>

      <div className="bookhotel-cards">
        {hoteldetails.map((value, index) => {
          return (
            <div className="hotel-card">
              <img
                src={`data:image/jpeg;base64,${value.hotelimage}`}
                alt="hotel image"
                className="hotel-image"
              />
              <div className="hotel-details">
                <h2 className="hotel-name">{value.hotelname}</h2>
                <p className="hotel-location">
                  <strong>Location:</strong> {value.location}
                </p>
                <p className="hotel-description">{value.description}</p>
                <p className="hotel-price">
                  <strong>Price per Night:</strong> ${value.pricePerNight}
                </p>
                <a href="https://www.booking.com/index.en-gb.html?aid=2336990;label=en-in-booking-desktop-Ctf_o2H8FxQMAOS8*ecQkgS652804038422:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-124937915:lp9062096:li:dec:dm;ws=&gad_source=1&gbraid=0AAAAAD_Ls1LDbocGEw1MzHBQH7uQaiFwX&gclid=Cj0KCQiA-5a9BhCBARIsACwMkJ4xw6KVdycTcrBl9P6JCD2Ht14SHT6_HUiLqTdI2pdALVjKUcVW-2YaApqTEALw_wcB">
                  <button className="book-button">Book Now</button>
                </a>
                {/* </Link> */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer-hotelBooking">
        <Footer />
      </div>
    </div>
  );
};
export default BookHotel;
