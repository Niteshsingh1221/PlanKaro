// src/components/HotelCard.js
import { React, useEffect, useState } from "react";
import "./Hotel.css";
import axios from "axios";
import AddHotelModal from "./AddHotelModel";

const Hotel = () => {
  const [hotel, setHotel] = useState([]);
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };

  useEffect(() => {
    const Fetch = async () => {
      const response = await axios.get(
        "http://localhost:8080/hotels/getAllHotels"
      );
      console.log(response.data);
      setHotel(response.data);
    };
    Fetch();
    // console.log("inside useEffect")
  }, [model]);

  // const handledelete = async (id) => {
  //     const response = await axios.delete(`http://localhost:3001/hotels/deleteById/${id}` );
  //     // setHotel(hotel.filter((hotel) => hotel.id !== id));
  // }

  return (
    <div className="addHotel">
      <button onClick={toggleModel}>Add Hotel</button>

      <AddHotelModal isOpen={model} onClose={toggleModel} />

      <div className="hotel-container">
        {hotel.map((value, index) => {
          return (
            <div className="hotel-card">
              <img
                src={`data:image/jpeg;base64,${value.hotelimage}`}
                className="hotel-image"
                alt={`Image of ${value.name}`}
              />

              <div className="hotel-details">
                <h2 className="hotel-name">{value.name}</h2>
                <p className="hotel-location">{value.location}</p>
                <p className="hotel-description">{value.description}</p>
                <div className="hotel-info">
                  {/* <span className="hotel-rating">⭐{value.rating} </span> */}
                  <span className="hotel-price">
                    ${value.pricePerNight} / night
                  </span>
                </div>
              </div>
              <button className="updatebutton btn">Update</button>
              <button className="deletebutton btn">Delete</button>
            </div>
          );
        })}
      </div>
      {/* <button onClick={y}>open </button> */}
    </div>
  );
};

export default Hotel;
