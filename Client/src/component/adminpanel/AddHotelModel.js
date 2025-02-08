import React, { useState, useEffect } from "react";
import "./AddHotelModal.css"; // Import the modal's CSS
import axios from "axios";

const AddHotelModal = ({setModel }) => {
    const [hotelimage, setHotelImage] = useState(null);
    const [location, setLocationDetail] = useState([]); 
    const [hotelDetails, setHotelDetails] = useState({
        name: "",
        location: "",
        description: "",
        pricePerNight: ""
    });

    // if (!isOpen) return null;


    useEffect(() => {
        const fetchLocation = async () => {
            const response = await axios.get("http://localhost:8080/location/getalllocation");
            console.log(response.data, "response");

            setLocationDetail(response.data);

        }
        fetchLocation();
    },[])

    const handleChange = (e) => {
        setHotelDetails({
            ...hotelDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            setHotelImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hotel Details:", hotelDetails);

        const formData = new FormData();
        formData.append("dto", new Blob([JSON.stringify(hotelDetails)], { type: "application/json" }));

        if (hotelimage) formData.append("hotelimage", hotelimage);

        try {
            const response = await axios.post("http://localhost:8080/hotels/addHotel", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Hotel Added:", response.data);
            alert("Hotel added successfully!");

            setHotelDetails({ name: "", location: "", description: "", pricePerNight: "" });
            setHotelImage(null);
            // onClose();
            setModel(false);
        } catch (error) {
            console.error("Error adding hotel:", error);
            alert("Error adding hotel!");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add Hotel</h2>
                <form onSubmit={handleSubmit}>
                    <label>Hotel Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={hotelDetails.name}
                        onChange={handleChange}
                        placeholder="Enter hotel name"
                        required
                    />

                    <label>Location:</label>
                    <select
                        name="location"
                        value={hotelDetails.location}
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select a location</option>
                        {location.map((value , index) => (
                            <option value={value.locationname}>
                                {value.locationname}
                            </option>
                        ))}
                    </select>

                    <label>Price per Night:</label>
                    <input
                        type="number"
                        name="pricePerNight"
                        value={hotelDetails.pricePerNight}
                        onChange={handleChange}
                        placeholder="Enter price"
                        required
                    />

                    <label>Hotel Image:</label>
                    <input
                        className="form-control"
                        type="file"
                        onChange={handleImageChange}
                    />

                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={hotelDetails.description}
                        onChange={handleChange}
                        placeholder="Enter hotel description"
                        required
                    ></textarea>

                    <div className="modal-buttons">
                        <button type="submit" className="addbutton">
                            Add Hotel
                        </button>
                        <button type="button" className="closebutton" onClick={()=>setModel(false)}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddHotelModal;
