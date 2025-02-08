import { Link } from "react-router-dom";
import Logo from "../../Utils/logo.png";
import "./Home.css";
import Wallpaper from "../../Utils/hotel.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import Navbar from "./Navbar";

const Home = () => {
  const usericon=<i className="fa-solid fa-user"></i>
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
      {/* <div className="nav-content">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="auth-buttons">
            <div className="home-userName">
              {userName !== "" ? (
                <Link to="/userprofile">
                  <button>{usericon}{userName}</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button>Login</button>
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
      </div> */}
      <div className="home-container">
        <Navbar />
      </div>
      {/* <div className="wallpaper">
          <img src={Wallpaper} alt="wallpaper"></img>
        </div> */}

      <div className="hotel-card-display">
        <div className="heading-h3">
          <h3>Stay at our top unique locations</h3>
        </div>
        <div className="container-data">
          {locationdetail.map((value, index) => {
            return (
              <div
                style={{
                  width: "350px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "5px 10px 8px #888888",
                  backgroundColor: "white",
                  padding: "16px",
                }}
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
                  <h2
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Location
                  </h2>
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
                      <button onClick={() => handleClick(value)}>
                        {" "}
                        Book Hotel
                      </button>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <button>Book Hotel</button>{" "}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
