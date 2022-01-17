import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getOneBooking } from "../../store/bookingsReducer";
import { getSpotById } from "../../store/spotReducer";

import './Bookings.css';

const SingleBookingDetails = () => {
    // const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const oneBooking = useSelector(state => state.bookingState.trips[id]);
    const oneSpot = useSelector(state => state.spotState.listings[id])
    console.log("THIS IS ONE SPOT" , oneSpot)

    useEffect(() => {
        dispatch(getOneBooking(id))
        dispatch(getSpotById(id))
    }, [dispatch, id])

    return (
        <div className="single-booking-container">
            <div className="single-booking-header">
                <div className="booking-image-text">Your stay at {oneBooking?.Spot.name}</div>
                {/* <NavLink to={`/spots/${oneSpot.id}`}> */}
                    <img className='booking-image' id={id} key={oneSpot?.id} src={oneSpot?.Images[0]?.url}></img>
                {/* </NavLink> */}

                <div className="checkin-checkout">
                    <div className="checkin">Check-in</div>
                    <div>Checkout</div>
                </div>
            </div>
            <div>
                <h2>Reservation details</h2>
            </div>
            <div>
                <h2>Getting there</h2>
            </div>
            <div>
                <h2>Where you're staying</h2>
            </div>

        </div>
    )
}

export default SingleBookingDetails;
