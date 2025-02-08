import axios from "axios";

const BookingDetail=()=>{
    const[bookingdetails,setBookingDetails]=useState([])


        const [userName, setUserName] = useState("");
        useEffect(() => {
          let user = JSON.parse(localStorage.getItem("user"));
          if (user) {
            setUserName(user.username);
          } else {
            setUserName("");
          }
          const fetch = async()=>{
            const response =await axios.get(`http://localhost:8080/bookingdetails/username/${userName}`)
          }
          fetch();
          setBookingDetails(response.data)
        }, []);


    return(
        <div>

        </div>
    )
}