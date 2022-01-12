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
    // console.log(oneSpot)

    useEffect(() => {
        dispatch(getSpotById(id))
    }, [dispatch, id])


    return (
        <div>
            <h2 className='spot-detail-page'>{oneSpot?.name}</h2>
            <div>{oneSpot?.address}</div>
            <div>{oneSpot?.city}, {oneSpot?.state}</div>
            <div>${oneSpot?.price}</div>
            <img className='spot-images' id={id} key={oneSpot?.id} src={oneSpot?.Images[0].url}></img>

            {/* Add Reviews and Bookings */}
        </div>
    )
}

export default SingleSpotDetailPage;
