import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const Location = () => {
  const [locationname, setLocationName] = useState("");
  const [locationimage, setLocationImage] = useState(null);

  const handleChange = (e) => {
    setLocationName(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setLocationImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(locationname, locationimage);

    const formData = new FormData();
    formData.append("locationname", locationname);
    if (locationimage) {
      formData.append("locationimage", locationimage);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/location/addlocation",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      if (response.data.status === true) {
        toast.success("Location Added Successfully", {
          position: "bottom-right",
          autoClose: 5000,
          pauseOnHover: true,
        });
      } else {
        toast.error("Location Already Exists", {
          position: "bottom-right",
          autoClose: 5000,
          pauseOnHover: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while adding the location", {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="location">
        <div className="location-heading">
            <h3>Add Hotel Location</h3>
        </div>
      <div className="location-form">
      <form onSubmit={handleSubmit}>
        <div className="locationname">
          <label>Location Name:</label>
          <input type="text" name="locationname" onChange={handleChange} />
        </div>

        <div className="locationimage">
          <label>Location Image:</label>
          <input
            type="file"
            name="locationimage"
            onChange={handleImageChange}
          />
        </div>

        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Location; // Export the component
