import { useState, useEffect } from "react";

const Booking = () => {
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [numRooms, setNumRooms] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);
    const [hotelPrice, setHotelPrice] = useState(0);

    useEffect(() => {
        const price = JSON.parse(sessionStorage.getItem("hotelprice"));
        if (price) {
            setHotelPrice(price);  
        }
    }, []);

    const handleCalculateTotal = () => {
        if (checkinDate && checkoutDate && hotelPrice > 0 && numRooms > 0) {
            
            const checkin = new Date(checkinDate);
            const checkout = new Date(checkoutDate);
            const diffTime = Math.abs(checkout - checkin);
            const numberOfNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            
            const total = numberOfNights * hotelPrice * numRooms;
            setTotalAmount(total);
        }
    }

    const handleRoomChange = (operation) => {
        
        setNumRooms((prev) => (operation === "+" ? prev + 1 : prev > 1 ? prev - 1 : 1));
    }

    useEffect(() => {
        
        handleCalculateTotal();
    }, [checkinDate, checkoutDate, numRooms, hotelPrice]);

    return (
        <div className="booking">
            <div>
                <form className="bookingform">
                    <div className="personname">
                        <label>Person Name:</label>
                        <input type="text" name="name" placeholder="Enter your name" />
                    </div>

                    <div className="personemail">
                        <label>Person Email:</label>
                        <input type="email" name="email" placeholder="Enter your email" />
                    </div>

                    <div className="personphone">
                        <label>Person Phone:</label>
                        <input type="tel" name="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="dateofcheckin">
                        <label>Date of CheckIn:</label>
                        <input
                            type="date"
                            name="checkin"
                            placeholder="Enter your check-in date"
                            value={checkinDate}
                            onChange={(e) => setCheckinDate(e.target.value)}
                        />
                    </div>

                    <div className="dateofcheckout">
                        <label>Date of CheckOut:</label>
                        <input
                            type="date"
                            name="checkout"
                            placeholder="Enter your check-out date"
                            value={checkoutDate}
                            onChange={(e) => setCheckoutDate(e.target.value)}
                        />
                    </div>

                    <div className="numberofguests">
                        <label>Number of Guests:</label>
                        <input type="number" name="guests" placeholder="Enter number of guests" />
                    </div>

                    <div className="noofroom">
                        <label>Number of Rooms:</label>
                        <button type="button" onClick={() => handleRoomChange("+")}>+</button>
                        <span>{numRooms}</span>
                        <button type="button" onClick={() => handleRoomChange("-")}>-</button>
                    </div>

                    <div className="totalAmount">
                        <h3>Total Amount: ${totalAmount}</h3>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Booking;
