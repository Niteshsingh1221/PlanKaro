import axios from "axios";
import { useEffect, useState } from "react";
import "./BookHotel.css";
import Navbar from "../home/Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const BookHotel = () => {

    const gethoteldetails = (e) => {
        sessionStorage.setItem("hotelprice", JSON.stringify(e.pricePerNight))
        localStorage.setItem("hotelname",JSON.stringify(e.name))
        localStorage.setItem("hotelid",JSON.stringify(e.hotelId))
        localStorage.setItem("location",JSON.stringify(e.location))



        console.log(e, "response")
        console.log(e.name,"name")
        console.log(e.location,"location")
        console.log(e.hotelId,"hotelid")

    }

  

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
                                <h2 className="hotel-name">{value.name} </h2>
                                <p className="hotel-location">
                                    <strong>Location:</strong> {value.location}
                                </p>
                                <p className="hotel-description">{value.description}</p>
                                <p className="hotel-price">
                                    <strong>Price per Night:</strong> ${value.pricePerNight}
                                </p>

                                <Link to="/booking">
                                    <button onClick={() => gethoteldetails(value)}>Book Now</button>
                                </Link>
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