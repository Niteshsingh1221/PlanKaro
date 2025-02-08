import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Add Link for navigation
import './UserProfile.css'; // Ensure this points to the correct path
import axios from "axios"; // Import axios for making API calls
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast

const UserProfile = () => {
    const navigate = useNavigate();
    
    // State for storing user profile information (ensure no undefined/null values)
    const [userprofile, setUserProfile] = useState({
        user_id: "",
        username: "",
        fullname: "",
        email: "",
        password: "",
        gender: "",
        mobile_no: "",  // Use mobile_no instead of phone
        dateofbirth: ""
    });

    const [username, setUsername] = useState('');   // For username input
    const [email, setEmail] = useState('');           // For email input
    const [password, setPassword] = useState('');     // For password input
    const [fullname, setFullname] = useState('');     // For fullname input
    const [gender, setGender] = useState('');         // For gender input
    const [mobileNo, setMobileNo] = useState('');     // For mobile number input
    const [dateofbirth, setDateofbirth] = useState(''); // For dateofbirth input
    const [isEditable, setIsEditable] = useState(false); // To control if fields are editable

    // Get user profile data from localStorage on component mount
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserProfile({
                user_id: user.user_id || '',
                username: user.username || '',
                fullname: user.fullname || '',
                email: user.email || '',
                password: user.password || '',
                gender: user.gender || '',
                mobile_no: user.mobile_no || '',  // Fetch mobile_no from user
                dateofbirth: user.dateofbirth || ''
            });

            // Initialize the individual state for form fields
            setUsername(user.username || '');  // Initialize username state
            setEmail(user.email || '');        // Initialize email state
            setPassword(user.password || '');  // Initialize password state
            setFullname(user.fullname || '');  // Initialize fullname state
            setGender(user.gender || '');      // Initialize gender state
            setMobileNo(user.mobile_no || ''); // Initialize mobile_no state
            setDateofbirth(user.dateofbirth || '');  // Initialize dateofbirth state
        }
    }, []); 

    // Handle the delete action
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/users/deleteuser/${userprofile.user_id}`);
            console.log(response.data, "response");
    
            if (response.data === true) {
                toast.success("Your Profile is Deleted", {
                    position: "bottom-right",
                    autoClose: 5000,
                    pauseOnHover: true
                });
                localStorage.removeItem("user");
                navigate("/", { state: { profileDeleted: true } });
            } else {
                toast.error("Failed to Delete Profile", {
                    position: "bottom-right",
                    autoClose: 5000
                });
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Error deleting your profile. Please try again.", {
                position: "bottom-right",
                autoClose: 5000
            });
        }
    };

    // Handle the update action
    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedUserProfile = {
            user_id: userprofile.user_id,  // Do not modify user_id
            username,
            fullname,
            email,
            password,
            gender,
            mobile_no: mobileNo,  // Ensure mobile_no is used here
            dateofbirth
        };

        console.log("Sending the following update data:", updatedUserProfile);

        try {
            const response = await axios.put(`http://localhost:8080/users/updateuser/${userprofile.user_id}`, updatedUserProfile);
            console.log("User updated successfully:", response);
            toast.success("Profile updated successfully", {
                position: "bottom-right",
                autoClose: 5000,
                pauseOnHover: true
            });

            // Disable the inputs after updating
            setIsEditable(false);
        } catch (error) {
            console.error("Error updating user:", error);
            toast.error("Error updating your profile. Please try again.", {
                position: "bottom-right",
                autoClose: 5000
            });
        }
    };

    // Toggle input fields between editable and non-editable
    const handleEditClick = () => {
        setIsEditable(true); // Enable inputs for editing
    };

    return (
        <div className="user-profile">
            <div className="profile-container">
                <h1>User Profile</h1>
                <div className="profile-form">
                    <div>
                        <label>User ID:</label>
                        <input type="text" value={userprofile.user_id} disabled={true} />
                    </div>
                    <div>
                        <label>Username:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            disabled={!isEditable} 
                        />
                    </div>
                    <div>
                        <label>Full Name:</label>
                        <input 
                            type="text" 
                            value={fullname} 
                            onChange={(e) => setFullname(e.target.value)} 
                            disabled={!isEditable} 
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            disabled={!isEditable} 
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            disabled={!isEditable} 
                        />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input 
                            type="text" 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)} 
                            disabled={!isEditable} 
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input 
                            type="text" 
                            value={mobileNo} 
                            onChange={(e) => setMobileNo(e.target.value)} 
                            disabled={!isEditable} 
                        />
                    </div>
                    <div>
                        <label>Date of Birth:</label>
                        <input 
                            type="date" 
                            value={dateofbirth} 
                            onChange={(e) => setDateofbirth(e.target.value)} 
                            disabled={!isEditable} 
                        />
                    </div>

                    {/* Buttons */}
                    <div className="buttons">
                        {!isEditable ? (
                            <button className="update-btn" onClick={handleEditClick}>Edit</button>
                        ) : (
                            <button className="update-btn" onClick={handleUpdate}>Update</button>
                        )}
                        <button className="delete-btn" onClick={handleDelete}>Delete</button>
                        
                    </div>

                    {/* Back to Home Page link */}
                    <div className="back-to-home">
                        <Link to="/" className="back-link">Back to Home Page</Link>
                    </div>
                </div>
            </div>
            {/* ToastContainer to display toasts */}
            <ToastContainer />
        </div>
    );
};

export default UserProfile;
