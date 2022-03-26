import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getAllBookings } from '../../store/bookingsReducer';
import { getAllSpots } from '../../store/spotReducer';
import moment from "moment";

import './Bookings.css';
import BookingDetails from './BookingDetails';

const BookingsPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    // console.log(sessionUser)
    const bookingsObject = useSelector(state => state.bookingState.trips)
    const bookings = Object.values(bookingsObject);
    // console.log('bookings object', bookingsObject)
    // console.log(bookings)

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
            <h1 className='bookings-page-trips-header'>Trips</h1>
            {/* <div>
                {bookings.length &&
                    <button>Start searching</button>
                }
            </div> */}
            <ul className='bookings-container'>
                <h2 className='future-stay-text'>Upcoming Trips</h2>
                {bookings?.map((booking) => (
                     moment(booking?.startDate).isAfter(new Date()) &&
                        <BookingDetails key={booking?.id} id={booking?.id} />
                ))}
            </ul>

            <h2 className='already-stayed-text'>Where you've been</h2>
            <ul className='bookings-container'>
                {bookings?.map((booking) => (
                     moment(booking?.startDate).isBefore(new Date())&&
                        <BookingDetails key={booking?.id} id={booking?.id} />
                ))}
            </ul>
        </div>
    )
}

export default BookingsPage;
