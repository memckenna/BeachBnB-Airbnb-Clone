import React from "react";
import DatePicker from "react-datepicker";

import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

const BookingCalendar = () => {
    const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());

 return (
   <div className="datepicker">
       <div className="checkin">
            <h3>Check-in</h3>
            <DatePicker
            className="date"
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={date => setStartDate(date)}
            />

       </div>
       <div className="checkout">
            <h3>Checkout</h3>
            <DatePicker
            className="date"
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={date => setEndDate(date)}
            />
       </div>
   </div>
 );
}

export default BookingCalendar;
