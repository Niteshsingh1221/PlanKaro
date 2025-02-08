import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Utils/logo.png";
import "./Home.css";
// import Wallpaper from "../../Utils/hotel.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Footer from "../Footer";

const Navbar = () => {
  const navigate = useNavigate();
  const [locationdetail, setLocationDetail] = useState([]);

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

  const [userName, setUserName] = useState("");
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserName(user.username);
    } else {
      setUserName("");
    }
  }, []);
  const SignOut = () => {
    localStorage.removeItem("user");
    setUserName("");
    navigate("/");
  };

  const handleClick = (e) => {
    sessionStorage.setItem("details", JSON.stringify(e.locationname));
  };
  return (
    <div className="home-container">
      <div className="nav-content">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="auth-buttons">
            <div className="home-userName">
              {userName !== "" ? (
                <Link to="/userprofile">
                  <button>{userName}</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button>Login</button>
                </Link>
              )}
            </div>

            <div className="BookingDetail">
              {userName !== "" ? (
                <Link to="/bookingdetail">
                  <button>BookingDetail</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button>BookingDetail</button>
                </Link>
              )}
            </div>

            <div className="signIn-signOut">
              {userName !== "" ? (
                <button type="button" onClick={SignOut}>
                  Signout
                </button>
              ) : (
                <Link to="/register">
                  <button>SignUp</button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="heading-h2">
          <h2>Find your next stay</h2>
          <h3>Search low prices on hotels, homes and much more...</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
