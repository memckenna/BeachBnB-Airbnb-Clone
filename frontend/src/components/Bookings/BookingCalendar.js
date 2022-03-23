import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { createNewBooking } from "../../store/bookingsReducer";
import { getOneBooking, getAllBookings } from "../../store/bookingsReducer";

import "react-datepicker/dist/react-datepicker.css";
import './Bookings.css'

const BookingCalendar = ({ spot }) => {
     const dispatch = useDispatch();
     const history = useHistory();
     const { id } = useParams()
     const bookingObj = useSelector(state => state.bookingState.trips[id])
     const sessionUser = useSelector(state => state.session.user)
     console.log("BOOKING STATE", bookingObj)

     const [startDate, setStartDate] = useState(new Date());
     const [endDate, setEndDate] = useState(new Date());
     // const [spotId, setSpotId] = useState(bookingObj?.spotId)
     // const [userId, setUserId] = useState(sessionUser?.id)
     const [errors, setErrors] = useState([])

     useEffect(() => {
          dispatch(getOneBooking(id))
     }, [dispatch, id])

     const handleStartDate = (date) => {
          setStartDate(date)
          setEndDate(null)
     }
     const handleEndDate = (date) => {
          setEndDate(date)
     }

     const createBooking = async (e) => {
          e.preventDefault()

          const booking = {
               startDate,
               endDate,
               spotId: bookingObj?.spotId,
               userId: sessionUser?.id
          };

          await dispatch(createNewBooking(booking))
          // await dispatch(getOneBooking(id))
          dispatch(getAllBookings())
          history.push(`/bookings`)


          // if(newBooking) {
          // }
     }


//     if (!sessionUser) return <Redirect to="/" />;

     return (
          <div className='booking-section'>
               <div className='booking'>
                    <div className='booking-calendar'>
                         <ul>
                              {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
                         </ul>
                         <div className="booking-calendar-price"><strong>${bookingObj?.Spot?.price}</strong> / night</div>
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
                                             minDate={new Date()}
                                             // onChange={date => setStartDate(date)}
                                             onChange={handleStartDate}

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
                                             onChange={handleEndDate}
                                             // onChange={date => setEndDate(date)}

                                        />
                                   </div>

                              </div>
                              <div className='reserve'>
                                   <button type="submit" className='reserve-button'>Reserve</button>
                                   <div className='reserve-text'>You won't be charged yet</div>
                              </div>
                         </form>
                    </div>
                    {startDate && endDate && (
                         <div>
                              <p>
                                   You selected {moment(startDate).format("LL")} to{" "}
                                   {moment(endDate).format("LL")}
                              </p>
                         </div>
                    )}

                    <div>
                         <h3>Unavailable Dates: </h3>
                         {spot?.Bookings?.length ?
                              Object.values(spot?.Bookings)?.map((booking, idx) => (

                                   // <li key={booking.id}>{booking?.startDate.split('T')[0].replaceAll('-', ' / ')}  -  {booking?.endDate.split('T')[0].replaceAll('-', ' / ')}</li>
                                   <li key={booking?.id}>{moment(booking?.startDate).format("LL")} -{" "} {moment(booking?.endDate).format("LL")}</li>
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
