import axios from "axios";
import { useEffect, useState } from "react";
import "./BookHotel.css"
import { Link } from "react-router-dom";



const BookHotel = () => {

    const gethotelprice = (e) => {
        sessionStorage.setItem("hotelprice", JSON.stringify(e.pricePerNight))
        console.log(e.pricePerNight, "response")
    }



    const [hoteldetails, setHotelDetails] = useState([])
    useEffect(() => {

        const detail = JSON.parse(sessionStorage.getItem("details"))

        // console.log(detail)

        const fetch = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/hotels/location/${detail}`)
                //  console.log(response)

                setHotelDetails(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetch();

    }, [])

    return (
        <div>
            <div>
                <h1>Hotels</h1>
            </div>

            <div>
                {hoteldetails.map((value, index) => {
                    return (
                        <div className="hotel-card">
                            <img src={`data:image/jpeg;base64,${value.hotelimage}`} alt="hotel image" className="hotel-image" />
                            <div className="hotel-details">
                                <h2 className="hotel-name">{value.hotelname}</h2>
                                <p className="hotel-location"><strong>Location:</strong> {value.location}</p>
                                <p className="hotel-description">{value.description}</p>
                                <p className="hotel-price"><strong>Price per Night:</strong> {value.pricePerNight}</p>

                                <Link to="/booking">
                                    <button onClick={() => gethotelprice(value)}>Book Now</button>
                                </Link>



                            </div>
                        </div>

                    )


                })}


            </div>
        </div>
    )
}
export default BookHotel;
