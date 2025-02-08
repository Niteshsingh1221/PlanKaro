// src/components/HotelCard.js
import { React, useEffect, useState } from "react";
import "./Hotel.css";
import axios from "axios";
import AddHotelModal from "./AddHotelModel";

const Hotel = () => {

    const [hotel, setHotel] = useState([]);
    const [model, setModel] = useState(false);
    const [updateModal , setUpdateModal] = useState(false);
    const [updateHotel , setUpdateHotel] = useState({
        name:"",
        pricePerNight:"",
        description:""
    });


    useEffect(() => {
        const Fetch = async () => {
            const response = await axios.get("http://localhost:8080/hotels/getAllHotels");
            setHotel(response.data);
            console.log(`hotel response: ${response.data}`);
            setUpdateHotel(response.data)
            console.log(`updatehotel response: ${response.data}`);

        }
        Fetch()
    }, [model , updateModal])



    const handleChange= (e)=>
    {
        setUpdateHotel({
            ...updateHotel ,
            [e.target.name]: e.target.value
        })
    }

    const handledelete = async (hotelId) => {
        try {
            await axios.delete(`http://localhost:8080/hotels/deleteById/${hotelId}`);
            const response = await axios.get("http://localhost:8080/hotels/getAllHotels");
            setHotel(response.data);
        } catch (error) {
            console.error("Error deleting hotel:", error);
        }
    };

    const handleUpdate = async (hotelId) => {
        try {
            const response = await axios.get(`http://localhost:8080/hotels/getHotel/${hotelId}`);
            setUpdateHotel(response.data);
            console.log( "getbyid : "+response.data);
            setUpdateModal(true);
            
        } catch (error) {
            console.error("Error fetching hotel:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`http://localhost:8080/hotels/update/${updateHotel.hotelId} ` , updateHotel);
        console.log("after call update api :" + response.data);
        const updatedHotels = await axios.get("http://localhost:8080/hotels/getAllHotels");
        setHotel(updatedHotels.data);
        setUpdateModal(false);
    }


    return (
        <div className="hotelMainContainer">

            <button className="addhotelbtn" onClick={() => setModel(true)} >Add Hotel</button>

            {model && <AddHotelModal isOpen={model} setModel={setModel} />}

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
                                    <span className="hotel-price">Rs {value.pricePerNight} / night</span>
                                </div>
                            </div>
                            <button className="updatebutton" onClick={()=>handleUpdate(value.hotelId)}>Update</button>
                            <button className="deletebutton" onClick={() => handledelete(value.hotelId)}>Delete</button>
                        </div>
                    )
                })}
            </div>

                {/* update form */}

                {updateModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Update Hotel</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Hotel Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={updateHotel.name}
                                onChange={handleChange}
                                required
                            />

                            <label>Price per Night:</label>
                            <input
                                type="number"
                                name="pricePerNight"
                                value={updateHotel.pricePerNight}
                                onChange={handleChange}
                                required
                            />

                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={updateHotel.description}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <div className="modal-buttons">
                                <button type="submit" className="updatebutton">Update Hotel</button>
                                <button type="button" className="closebutton" onClick={() => setUpdateModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>


    );
};

export default Hotel;
