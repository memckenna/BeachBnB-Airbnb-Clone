import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpotById } from '../../store/spotReducer';

import './SpotsPage.css'

const SingleSpotDetailPage = () => {
    
    const { id } = useParams();

    const dispatch = useDispatch();
    const oneSpot = useSelector(state => state.spotState.listings[id])
    console.log("THIS IS ONE SPOT IMAGE", oneSpot)

    useEffect(() => {
        dispatch(getSpotById(id))
    }, [dispatch, id])


    return (
        <div className='spot-detail-page'>
            <h2>{oneSpot?.name}</h2>
            <div className='spot-address'>
                <div>{oneSpot?.address}</div>
                <div>{oneSpot?.city}, {oneSpot?.state}</div>
            </div>
            <div>
                <img className='spot-images' id={id} key={oneSpot?.id} src={oneSpot?.Images[0].url}></img>
            </div>
            <div className='spot-price'>
                <div>${oneSpot?.price}/night</div>
            </div>
            <div className='detail-section'>
                <h3 className='details-header'>Home Details</h3>
                <div className='home-details'>
                    <div className='beds'>Bedrooms: {oneSpot?.bedrooms}</div>
                    <div className='baths'>Baths: {oneSpot?.baths}</div>
                </div>
            </div>

            {/* Add Reviews and Bookings */}
        </div>
    )
}

export default SingleSpotDetailPage;
