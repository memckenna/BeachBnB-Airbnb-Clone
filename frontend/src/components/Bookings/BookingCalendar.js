import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
// import { extendMoment } from 'moment-range';

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


     const [startDate, setStartDate] = useState(new Date());
     const [endDate, setEndDate] = useState(new Date());
     const [defaultShow, setDefaultShow] = useState("Add date")
     const [errors, setErrors] = useState([])

     const start = moment(startDate)
     const end = moment(endDate)


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

     // const startRange = moment(bookingObj?.startDate)
     // const endRange = moment(bookingObj?.endDate)
     // const availabilityRange = moment.range(startRange, endRange)

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
     }
     if (!sessionUser) return <Redirect to="/" />;

     return (
          <div className='booking-section'>
               <div className='booking'>
                    <div className='booking-calendar'>
                         <ul>
                              {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
                         </ul>
                         <div className="booking-calendar-price-section">
                              <div className="booking-calendar-price">${bookingObj?.Spot?.price}</div>
                              <div className="booking-calendar-night"> / night</div>
                         </div>
                         <form onSubmit={createBooking} className="datepicker">
                              <div className="booking-calendar-dates">
                                   <div className="checkin">
                                        <h3 className="checkin-date-picker">CHECK-IN</h3>
                                        <DatePicker
                                             className="date"
                                             // placeholderText="Add date"
                                             selected={startDate}
                                             selectsStart
                                             startDate={startDate}
                                             endDate={endDate}
                                             minDate={new Date()}
                                             // excludeDates={startDate, endDate}
                                             // monthsShown="2"
                                             // onChange={date => setStartDate(date)}
                                             onChange={handleStartDate}

                                        />
                                   </div>
                                   <div className="checkout">
                                        <h3 className="checkin-date-picker">CHECKOUT</h3>
                                        <DatePicker
                                             className="date"
                                             placeholderText="Add date"
                                             selected={endDate}
                                             selectsEnd
                                             startDate={startDate}
                                             endDate={endDate}
                                             minDate={startDate}
                                             // excludeDates={startDate, endDate}
                                             // monthsShown="2"
                                             onChange={handleEndDate}
                                        // onChange={date => setEndDate(date)}

                                        />
                                   </div>
                              </div>
                              <div className='reserve'>
                                   <button type="submit" className='reserve-button'>Reserve</button>
                                   {/* <div className='reserve-text'>You won't be charged yet</div> */}
                              </div>
                         </form>

                    </div>
                    {startDate && endDate && (
                         <div>
                              <div className='reserve-text'>You won't be charged yet</div>
                              <div className="dates-selected-pricing-div">
                                   <div className="dates-selected-pricing">
                                        {/* You selected {moment(startDate).format("LL")} to{" "}
                                        {moment(endDate).format("LL")} */}
                                        ${parseFloat(bookingObj?.Spot?.price)} X {Math.round(moment.duration(end.diff(start)).asDays())} nights
                                   </div>
                                   <div className="dates-selected-pricing-total">
                                        ${Math.round(moment.duration(end.diff(start)).asDays()) * parseFloat(bookingObj?.Spot?.price)}
                                   </div>
                              </div>
                              <div className="dates-selected-pricing-div">
                                   <div className="dates-selected-pricing">Cleaning fee</div>
                                   <div className="dates-selected-pricing-total"> $150 </div>

                              </div>
                              <div className="dates-selected-pricing-div">
                                   <div className="dates-selected-pricing">Service fee</div>
                                   <div className="dates-selected-pricing-total-last"> $0 </div>

                              </div>
                              <div className="dates-selected-total-price-div">
                                   <div className="total-before-taxes">Total before taxes</div>
                                   <div>${Math.round(moment.duration(end.diff(start)).asDays()) * parseFloat(bookingObj?.Spot?.price) + Number(150)}</div>

                              </div>
                         </div>

                    )}

                    {/* <div>
                         <h3>Unavailable Dates: </h3>
                         {spot?.Bookings?.length ?
                              Object.values(spot?.Bookings)?.map((booking, idx) => (

                                   // <li key={booking.id}>{booking?.startDate.split('T')[0].replaceAll('-', ' / ')}  -  {booking?.endDate.split('T')[0].replaceAll('-', ' / ')}</li>
                                   <li key={booking?.id}>{moment(booking?.startDate).format("LL")} -{" "} {moment(booking?.endDate).format("LL")}</li>
                              )) :
                              <li>Be the first to book this spot</li>
                         }
                    </div> */}
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
