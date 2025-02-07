import React, { useState } from "react";
import "./AddHotelModal.css"; // Import the modal's CSS
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AddHotelModal = ({ isOpen, onClose }) => {

    const navigate = useNavigate();
    const [hotelimage, setHotelImage] = useState(null);
    // const [locationimage, setLocationImage] = useState(null);

    const [hotelDetails, setHotelDetails] = useState({
        name: "",
        location: "",
        description: "",
        pricePerNight: "",
        // hotelimage: "",
        // locationimage: "",
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        // const { name, value } = e.target;
        setHotelDetails({
            ...hotelDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e, imageType) => {
        if (e.target.files.length > 0) {
          if (imageType === "hotelimage") {
            setHotelImage(e.target.files[0]);
         } 
        //  else if (imageType === "locationimage") {
        //     setLocationImage(e.target.files[0]);
        //   }
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Hotel Details:", hotelDetails);
    
        const formData = new FormData();
        formData.append("dto", new Blob([JSON.stringify(hotelDetails)], { type: "application/json" }));
        
        if (hotelimage) formData.append("hotelimage", hotelimage);
        // if (locationimage) formData.append("locationimage", locationimage);
    
        try {
          const response = await axios.post("http://localhost:8080/hotels/addHotel", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
    
          console.log("Hotel Added:", response.data);
          alert("Hotel added successfully!");
    
          // Reset form after submission
          setHotelDetails({ name: "", location: "", description: "", pricePerNight: "" });
          setHotelImage(null);
        //   setLocationImage(null);
          onClose();
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
                    <input
                        type="text"
                        name="location"
                        value={hotelDetails.location}
                        onChange={handleChange}
                        placeholder="Enter location"
                        required
                    />

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
                        onChange={(e) => handleImageChange(e, "hotelimage")}
                    />

                    {/* <label>Location Image:</label>
                    <input
                        className="form-control"
                        type="file"
                        onChange={(e) => handleImageChange(e, "locationimage")}
                    /> */}

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
                        <button type="button" className="closebutton" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddHotelModal;