import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './ForgotPassword.css'

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8080/users/forgot-password", {
      email: email,
    });

    if (response.data.status === true) {
      navigate("/login");  // Redirect to login page after success
    } else {
      alert("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="containeri">
        <div className="box-container">
      <h1>Forgot Password</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default ForgotPassword;