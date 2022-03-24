import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getOneBooking, getAllBookings, deleteBooking } from "../../store/bookingsReducer";
import { getSpotById } from "../../store/spotReducer";
import EditABookingModal from "./EditBooking";
import moment from "moment";


import './Bookings.css';

const SingleBookingDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const oneBooking = useSelector(state => state.bookingState.trips[id]);
    // const oneSpot = useSelector(state => state.spotState)
    // console.log("THIS IS ONE SPOT" , oneSpot)
    console.log("booking state", oneBooking?.Spot)

    useEffect(() => {
        dispatch(getOneBooking(id))
        // dispatch(getSpotById(oneBooking?.Spot?.id))
    }, [dispatch, id])

    const cancelBooking = async (e) => {
        e.preventDefault()

        await dispatch(deleteBooking(id))
        getAllBookings()
        history.push(`/bookings`)
    }

    return (
        <div className="single-booking-container">
            <div className="single-booking-header">
                <div className="booking-image-text">Your stay at {oneBooking?.Spot?.name}</div>
                {/* <NavLink to={`/spots/${oneSpot.id}`}> */}
                    <img className='booking-image' id={id} key={oneBooking?.Spot?.id} src={oneBooking?.Spot?.Images[0]?.url} />
                {/* </NavLink> */}

                <div className="checkin-checkout">
                    <div className="single-checkin"><strong>Check-in: {" "} </strong> {moment(oneBooking?.startDate).format("LL")}</div>
                    <div className="single-checkout"><strong>Checkout: </strong> {moment(oneBooking?.endDate).format("LL")}</div>
                </div>
            </div>
            <div className="edit-delete-bookings-buttons">
                <div className="edit-single-booking-button-modal">
                    <EditABookingModal />
                </div>
                <div className="delete-single-booking-button-div">
                    <button className="delete-single-booking-button" onClick={cancelBooking}>Cancel Booking</button>
                </div>
            </div>
            <div>
                <h2>Reservation details</h2>
                <div>
                    <div>Bedrooms: {oneBooking?.Spot?.bedrooms}</div>
                    <div>Baths: {oneBooking?.Spot?.baths}</div>
                </div>
            </div>
            <div>
                <h2>Getting there</h2>
                <div>
                    <div>Address: </div>
                    <p>{oneBooking?.Spot?.address}</p>
                    <p>{oneBooking?.Spot?.city}, {oneBooking?.Spot?.state} {oneBooking?.Spot?.zipcode}</p>
                </div>
            </div>
            <div>
                <h2>Where you're staying</h2>
            </div>

        </div>
    )
}

export default SingleBookingDetails;
