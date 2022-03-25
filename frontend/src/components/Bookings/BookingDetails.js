import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import moment from "moment";


import './Bookings.css';

const BookingDetails = ({id}) => {
    const bookingDetail = useSelector(state => state.bookingState.trips[id]);
    const bookingsObject = useSelector(state => state.bookingState.trips)
    const bookings = Object.values(bookingsObject);
    const oneSpot = useSelector(state => state.spotState.listings[id]);
    // const spot = useSelector(state => state.spotState)
    // console.log("SPOT STATE", spot)
    // console.log("SPOTTTTT", oneSpot)
    // console.log("BOOKING DETAIL", bookingDetail);


    return (
        // <ul className='bookings-container'>
        //     <h2>Where you've been</h2>
        //     {bookings?.map((booking) => ())}
            <li className="bookings-detail">
                <div className="bookings-detail-div">
                    <div className="booking-detail-left">
                        <div>
                            <NavLink key={bookingDetail?.id} to={`/bookings/${id}`}>
                                <img className='booking-images' id={id} key={bookingDetail?.Spot?.id} src={bookingDetail?.Spot?.Images[0]?.url}></img>
                            </NavLink>
                        </div>
                    </div>
                    <div className="booking-detail-right">
                        <div>
                            <h2 className="bookings-page-city-header">{bookingDetail?.Spot?.city}</h2>
                        </div>
                        <div>
                            <NavLink className="bookings-page-name-navlink" key={bookingDetail?.id} to={`/bookings/${id}`}>{bookingDetail?.Spot?.name}</NavLink>
                        </div>
                        <div className="bookings-page-host">
                            Hosted by {bookingDetail?.Spot?.User?.username}
                        </div>
                        <div className="bookings-page-dates">
                            {/* {bookingDetail.startDate.split('T')[0].replaceAll('-', ' / ')} - {bookingDetail.endDate.split('T')[0].replaceAll('-', ' / ')} */}
                            {moment(bookingDetail.startDate).format("LL")} -{" "} {moment(bookingDetail.endDate).format("LL")}
                        </div>
                    </div>
                </div>
            </li>

        // </ul>
    )
}


export default BookingDetails;
