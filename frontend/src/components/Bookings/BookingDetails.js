import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import './Bookings.css';

const BookingDetails = ({id}) => {
    const bookingDetail = useSelector(state => state.bookingState.trips[id]);
    const oneSpot = useSelector(state => state.spotState.listings[id]);
    console.log("SPOTTTTT", oneSpot)
    console.log("BOOKING DETAIL", bookingDetail);


    return (
        <li className="bookings-detail">
            <div>
                <div>
                    <h2>{bookingDetail.Spot.name}</h2>
                    {/* <NavLink key={bookingDetail.Spot.id} to={`/spots/${bookingDetail?.Spot?.id}`}>{bookingDetail.Spot.name}</NavLink> */}
                </div>
                <div>
                    <NavLink key={bookingDetail.id} to={`/bookings/${id}`}>{bookingDetail?.Spot?.name}</NavLink>
                </div>
                <div>
                    <img className='spot-images' id={id} key={oneSpot?.id} src={oneSpot?.Images[0]?.url}></img>
                </div>
            </div>
        </li>
    )
}


export default BookingDetails;
