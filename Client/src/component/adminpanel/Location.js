import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useState , useEffect } from "react";

const Location = () => {
  const [locationname, setLocationName] = useState("");
  const [locationimage, setLocationImage] = useState(null);
  const [locationdetail, setLocationDetail] = useState([]);



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
      const response = await axios.post("http://localhost:8080/location/addlocation", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log("Full Response:", response);
      console.log("Response Data:", response.data);

      console.log("status : " + response.data.status);

      if (response.data == 200) {

        // fetchLocation();
        const response = await axios.get("http://localhost:8080/location/getalllocation");
        toast.success("Location Added Successfully", {
          position: "bottom-right",
          autoClose: 5000,
          pauseOnHover: true,
        })
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


  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get(
        "http://localhost:8080/location/getalllocation"
      );
      console.log(response.data, "response");

      setLocationDetail(response.data);
    };
    fetchLocation();
    
  }, []);
  
  const handledelete = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/location/delete/${id}`);
        const response = await axios.get("http://localhost:8080/location/getalllocation");
        setLocationDetail(response.data);
        toast.success("Location Deleted Successfully", {
          position: "bottom-right",
          autoClose: 1000,
          pauseOnHover: true,
          });
    } catch (error) {
        console.error("Error deleting hotel:", error);
        toast.error("An error occurred while deleting the location", {
          position: "bottom-right",
          autoClose: 1000,
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
      <div className="location-display-table">
        <h3>Display the Location</h3>
      </div>
      <table className="location-table">
        <thead className="location-table-head">
          <tr>
            <th>Location Name</th>
            <th>Location Image</th> 
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {locationdetail.map((value , index)=>
          {
            return(
              <tr>
              <td>{value.locationname}</td>
              <td><img src={`data:image/jpeg;base64,${value.locationimage}`} /></td>
              <tb><button className="location-delete-button" onClick={()=>handledelete(value.id)} >Delete</button></tb>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Location; 
