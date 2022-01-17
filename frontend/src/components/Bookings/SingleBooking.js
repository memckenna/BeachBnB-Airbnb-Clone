import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getOneBooking } from "../../store/bookingsReducer";

import './Bookings.css';

const SingleBookingDetails = () => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const oneBooking = useSelector(state => state.bookingState.trips[id]);
    const oneSpot = useSelector(state => state.spotState.listings[id])
    // console.log("THIS IS ONE SPOT" , oneSpot)

    useEffect(() => {
        dispatch(getOneBooking(id))
    }, [dispatch, id])

    return (
        <div className="single-booking-container">
            <div className="single-booking-header">
                <div className="booking-image-text">Your stay at {oneBooking?.Spot.name}</div>
                {/* <img className='booking-image' id={id} key={oneSpot?.id} src={oneSpot?.Images[0]?.url}></img> */}
                <img className='booking-image' src={oneSpot?.Images[0]?.url}></img>
                <div className="checkin-checkout">
                    <div>Check-in</div>
                    <div>Checkout</div>
                </div>
            </div>

        </div>
    )
}

export default SingleBookingDetails;
