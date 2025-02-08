import { Link, useLocation } from "react-router-dom"; // Import useLocation to get state passed via navigate
import Logo from "../../Utils/logo.png";
import "./Home.css";
import Wallpaper from "../../Utils/hotel.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the state passed via navigate
  const [locationdetail, setLocationDetail] = useState([]);
  const [userName, setUserName] = useState("");

  // Check if profile was deleted using location state
  useEffect(() => {
    if (location.state?.profileDeleted) {
      // If profile was deleted, show success toast
      toast.success("Your profile was deleted successfully", {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
      });
    }

    const fetchLocation = async () => {
      const response = await axios.get("http://localhost:8080/location/getalllocation");
      setLocationDetail(response.data);
    };
    fetchLocation();

    // Get user details from localStorage
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserName(user.username);
    } else {
      setUserName("");
    }
  }, [location.state]); // Dependency on location.state to trigger useEffect

  const SignOut = () => {
    localStorage.removeItem("user");
    setUserName("");
    navigate("/");
  };

  const handleClick = (e) => {
    sessionStorage.setItem("details", JSON.stringify(e.locationname));
  };

  return (
    <div className="home">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="auth-buttons">
          {userName !== "" ? (
            <Link to="/userprofile">{userName}</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {userName !== "" ? (
            <button type="button" onClick={SignOut}>
              Signout
            </button>
          ) : (
            <Link to="/register">SignUp</Link>
          )}
        </div>
      </div>

      <div className="wallpaper">
        <img src={Wallpaper} alt="wallpaper" />
      </div>

      <div className="container">
        {locationdetail.map((value, index) => (
          <div
            style={{
              width: "300px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              padding: "16px",
            }}
            key={index}
          >
            <img
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "px",
              }}
              src={`data:image/jpeg;base64,${value.locationimage}`}
              alt="Card Image"
            />
            <div style={{ padding: "8px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>Location</h2>
              <p
                style={{
                  color: "#4A90E2", // Soft blue color
                  fontSize: "14px",
                  marginTop: "8px",
                  fontFamily: "'Roboto', 'Helvetica', sans-serif", // Clean, modern font
                  fontWeight: "500", // Slightly bolder for emphasis
                  lineHeight: "1.6",
                  textAlign: "left",
                  letterSpacing: "1px", // Slightly increased letter spacing for uppercase
                  textTransform: "uppercase", // Makes text all uppercase
                }}
              >
                {value.locationname}
              </p>
            </div>
            <div style={{ padding: "8px", marginTop: "12px" }}>
              {userName !== "" ? (
                <Link to="/bookhotel">
                  <button onClick={() => handleClick(value)}> Book Hotel1</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button>Book Hotel</button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ToastContainer to display toasts */}
      <ToastContainer />
    </div>
  );
};

export default Home;
