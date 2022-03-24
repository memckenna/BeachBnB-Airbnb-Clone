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
    console.log("booking state", oneBooking)

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
                    <div className="single-checkin-div">
                        <div className="single-checkin">Check-in</div>
                        <div className="single-checkin-date">{moment(oneBooking?.startDate).format("llll")}</div>
                    </div>
                    <div className="single-checkout-div">
                        <div className="single-checkout">Checkout</div>
                        <div className="single-checkout-date">{moment(oneBooking?.endDate).format("llll")}</div>
                    </div>
                </div>
            </div>
            <div className="edit-delete-bookings-buttons">
                <div className="edit-single-booking-button-modal">
                    <EditABookingModal />
                </div>
                <div onClick={cancelBooking} className="delete-single-booking-button-div">
                    <div className="delete-single-booking-button" onClick={cancelBooking}>Cancel your reservations</div>
                    <div className="delete-booking-arrow"><i className="fas fa-angle-right"></i></div>

                    {/* <button className="delete-single-booking-button" onClick={cancelBooking}>Cancel Booking</button> */}
                </div>
            </div>
            <div className="reservation-details-section">
                <h2 className="reservation-details-header">Reservation details</h2>
                <div className="reservation-details-divider">
                    <h3 className="reservation-detail-h3">Who's coming</h3>
                    <div className="reservation-detail-content">guests: {oneBooking?.User?.username}</div>
                </div>
                <div className="reservation-details-divider">
                    <h3 className="reservation-detail-h3">Confirmation code</h3>
                    <div className="reservation-detail-content">TGBNDFGHJKL</div>
                </div>
                <div>
                    <h3 className="reservation-detail-h3">Cancellation policy</h3>
                    <div className="reservation-detail-content">
                        <div className="cancel-by">Cancel by</div>
                        <div className="cancel-by-dates">
                            <div className="cancellation-date">{moment(oneBooking?.startDate).subtract(2, 'days').calendar()}</div>
                            <div>Refund of the cleaning fee, if you paid one</div>
                        </div>
                        <div className="cancel-by-dates">
                            <div className="cancellation-date">{moment(oneBooking?.startDate).format("L")}</div>
                            <div>No refund</div>

                        </div>
                        <div onClick={cancelBooking} className="delete-event-button-div">
                            <div className="delete-event-button" onClick={cancelBooking}>Delete event</div>
                            <div className="delete-booking-arrow"><i className="fas fa-angle-right"></i></div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="reservation-details-section">
                <h2 className="reservation-details-header">Getting there</h2>
                <div className="reservation-details-divider">
                    <h3 className="reservation-detail-h3">Address</h3>
                    <div className="reservation-detail-content">
                        <p>{oneBooking?.Spot?.address}</p>
                        <p>{oneBooking?.Spot?.city}, {oneBooking?.Spot?.state} {oneBooking?.Spot?.zipcode}</p>
                    </div>
                </div>
                <div>
                    <h3 className="reservation-detail-h3">Directions from your host</h3>
                    <div className="reservation-detail-content">
                        <a href={`https://www.google.com/maps/place/${oneBooking?.Spot?.city}+${oneBooking?.Spot?.state}+${oneBooking?.Spot?.country}`} target="_blank">
                            {`https://www.google.com/maps/place/${oneBooking?.Spot?.city}+${oneBooking?.Spot?.state}+${oneBooking?.Spot?.country}`}
                        </a>
                    </div>
                </div>
            </div>
            <div className="reservation-details-section">
                <h2 className="reservation-details-header">Where you're staying</h2>
                <div className="reservation-details-divider">
                    <h3 className="reservation-detail-h3">House manual</h3>
                    <h4 className="reservation-detail-h4">SELF-CHECK IN</h4>
                    <div className="reservation-detail-content">
                        <p>{oneBooking?.Spot?.address} {oneBooking?.Spot?.city}, {oneBooking?.Spot?.state} {oneBooking?.Spot?.zipcode}</p>
                        <a href={`https://www.google.com/maps/place/${oneBooking?.Spot?.city}+${oneBooking?.Spot?.state}+${oneBooking?.Spot?.country}`} target="_blank">
                            {`https://www.google.com/maps/place/${oneBooking?.Spot?.city}+${oneBooking?.Spot?.state}+${oneBooking?.Spot?.country}`}
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="reservation-detail-h3">House Rules</h3>
                    <div className="reservation-detail-content">
                    </div>
                </div>
            </div>
            <div className="reservation-details-section">
                <h2 className="reservation-details-header">Host by {oneBooking?.Spot?.User?.username}</h2>
                <div>
                    <h3 className="reservation-detail-h3">About your host</h3>
                </div>
            </div>
            <div className="reservation-details-section">
            </div>

        </div>
    )
}

export default SingleBookingDetails;
