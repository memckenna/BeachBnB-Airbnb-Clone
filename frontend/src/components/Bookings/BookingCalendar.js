import React from "react";
import DatePicker from "react-datepicker";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { createNewBooking } from "../../store/bookingsReducer";
import { getOneBooking } from "../../store/bookingsReducer";

import "react-datepicker/dist/react-datepicker.css";
import './Bookings.css'

const BookingCalendar = ({spot}) => {
     const dispatch = useDispatch();
     const history = useHistory();
     const { id } = useParams()
     const bookingObj = useSelector(state => state.bookingState.trips[id])
     const sessionUser = useSelector(state => state.session.user)
     console.log("BOOKING STATE", bookingObj)


     const [startDate, setStartDate] = useState(new Date());
     console.log(startDate.toDateString())
     const [endDate, setEndDate] = useState(new Date());
     const [spotId, setSpotId] = useState(bookingObj?.spotId)
     const [userId, setUserId] = useState(sessionUser?.id)

     useEffect(() => {
          dispatch(getOneBooking(id))
     },[dispatch, id])

     const createBooking = async (e) => {
          e.preventDefault()

          const newBooking = { startDate, endDate, spotId, userId};

          const booking = await dispatch(createNewBooking(newBooking))
          if (booking) {
               setSpotId(booking.spotId)
               setUserId(sessionUser?.id)
               history.push(`/bookings/${booking.spotId}`)
          }
     }

     // const bookedDates = Object.values(spot?.Bookings)?.map((booking, idx) => {
     //      console.log(booking)
     // })
     // console.log(bookedDates)
     // const disableDates = date => {
     //      return !bookedDates.includes(date.startDate)
     // }
     // console.log(disableDates)

     return (
          <div className='booking-section'>
               <div className='booking'>
                    <div className='booking-calendar'>
                         <form onSubmit={createBooking} className="datepicker">
                              <div className="booking-calendar-dates">
                                   <div className="checkin">
                                        <h3>Check-in</h3>
                                        <DatePicker
                                             className="date"
                                             selected={startDate}
                                             selectsStart
                                             startDate={startDate}
                                             endDate={endDate}
                                             onChange={date => setStartDate(date)}
                                             minDate={new Date()}
                                             // isValidDate={}
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
                              <div className='reserve'>
                                   <button type="submit" className='reserve-button'>Reserve</button>
                                   <div className='reserve-text'>You won't be charged yet</div>
                              </div>
                         </form>
                    </div>
                    <div>
                         <h3>Unavailable Dates: </h3>
                         {spot?.Bookings?.length ?
                              Object.values(spot?.Bookings)?.map((booking, idx) => (

                                   <li key={booking.id}>{booking?.startDate.split('T')[0].replaceAll('-', ' / ')}  -  {booking?.endDate.split('T')[0].replaceAll('-', ' / ')}</li>
                              )) :
                              <li>Be the first to book this spot</li>
                         }
                    </div>
               </div>
          </div>


          // <div className="datepicker">
          //      <div className="checkin">
          //           <h3>Check-in</h3>
          //           <DatePicker
          //                className="date"
          //                selected={startDate}
          //                selectsStart
          //                startDate={startDate}
          //                endDate={endDate}
          //                onChange={date => setStartDate(date)}
          //           />

          //      </div>
          //      <div className="checkout">
          //           <h3>Checkout</h3>
          //           <DatePicker
          //                className="date"
          //                selected={endDate}
          //                selectsEnd
          //                startDate={startDate}
          //                endDate={endDate}
          //                minDate={startDate}
          //                onChange={date => setEndDate(date)}
          //           />
          //      </div>
          // </div>
     );
}

export default BookingCalendar;
