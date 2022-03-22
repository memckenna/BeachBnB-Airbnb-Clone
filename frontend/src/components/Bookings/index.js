import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getAllBookings } from '../../store/bookingsReducer';
import { getAllSpots } from '../../store/spotReducer';

import * as sessionActions from "../../store/session";
import * as bookingsActions from "../../store/bookingsReducer";
import './Bookings.css';
import BookingDetails from './BookingDetails';

const BookingsPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    console.log(sessionUser)
    const bookingsObject = useSelector(state => state.bookingState.trips)
    const bookings = Object.values(bookingsObject);
    console.log('bookings object', bookingsObject)
    console.log(bookings)

    // console.log("This is my Booking", bookings)
    // console.log(bookings)

    // const paylod = {
    //     bookingId: bookings.id,
    //     userId: sessionUser.id
    // }
    if (!sessionUser) {
        window.alert("You must be signed in to access bookings")
        setTimeout(() => {
            window.location.pathname = "/";
        }, 1000);
        //    return
    }

    useEffect(() => {
        dispatch(getAllBookings());
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <div className='bookings-page' >
            <h1 className='bookings-header'>Trips</h1>
            {/* {bookings} */}


            <ul className='bookings-container'>
                {bookings.map((booking) => (
                    <BookingDetails key={booking.id} id={booking.id} />
                ))}


            </ul>
        </div>
    )
}

export default BookingsPage;
