import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import moment from "moment";


import './Bookings.css';

const BookingDetails = ({id}) => {
    const bookingDetail = useSelector(state => state.bookingState.trips[id]);
    const oneSpot = useSelector(state => state.spotState.listings[id]);
    // const spot = useSelector(state => state.spotState)
    // console.log("SPOT STATE", spot)
    // console.log("SPOTTTTT", oneSpot)
    console.log("BOOKING DETAIL", bookingDetail);


    return (
        <li className="bookings-detail">
            <div className="bookings-detail-div">
                <div className="booking-detail-left">
                    <div>
                        <img className='spot-images' id={id} key={bookingDetail?.Spot?.id} src={bookingDetail?.Spot?.Images[0]?.url}></img>
                    </div>
                </div>
                <div className="booking-detail-right">
                    <div>
                        <h2>{bookingDetail?.Spot?.name}</h2>
                        {/* <NavLink key={bookingDetail.Spot.id} to={`/spots/${bookingDetail?.Spot?.id}`}>{bookingDetail.Spot.name}</NavLink> */}
                    </div>
                    <div>
                        <NavLink key={bookingDetail?.id} to={`/bookings/${id}`}>{bookingDetail?.Spot?.name}</NavLink>
                    </div>
                    <div>
                        Hosted by {bookingDetail?.Spot?.User?.username}
                    </div>
                    <div>
                        {/* {bookingDetail.startDate.split('T')[0].replaceAll('-', ' / ')} - {bookingDetail.endDate.split('T')[0].replaceAll('-', ' / ')} */}
                        {moment(bookingDetail.startDate).format("LL")} -{" "} {moment(bookingDetail.endDate).format("LL")}
                    </div>
                </div>
            </div>
        </li>
    )
}


export default BookingDetails;
