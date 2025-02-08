import './App.css';
import {BrowserRouter,  Route,Routes } from "react-router-dom"
import Login from './component/authentication/Login';
import Register from './component/authentication/Register';
import Home from './component/home/Home';
import UserProfile from './component/userprofile/UserProfile';
import AdminDashboard  from './component/adminpanel/AdminDashboard'
import Hotel from './component/adminpanel/Hotel'
import Location from './component/adminpanel/Location'; 
// import Room from './component/adminpanel/Room';
import BookHotel from './component/booking/bookhotel';
import ForgotPassword from './component/authentication/ForgotPassword';
import Booking from './component/booking/Booking';
import BookingDetail from './component/home/BookingDetail';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/location" element={<Location />} />
      <Route path="/bookhotel" element={<BookHotel />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/bookingdetails" element={<BookingDetail />} />


      </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
