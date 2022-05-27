// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, Route, useParams, useHistory } from 'react-router-dom';

// const CreateNewBooking = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const createBooking = async (e) => {
//         e.preventDefault()

//         const newBooking = { startDate, endDate };

//         const booking = await dispatch(createNewBooking(newBooking))
//         if (booking) {
//             history.push(`/bookings/${booking.id}`)
//         }
//     }

//     return (
//         <>
//             <div className='booking-section'>
//                 <div className='booking'>
//                     <div className='booking-calendar'>

//                         <BookingCalendar />
//                     </div>
//                     <div className='reserve'>
//                         <button onClick={createBooking} className='reserve-button'>Reserve</button>
//                         <div className='reserve-text'>You won't be charged yet</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CreateNewBooking;
