import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import './SpotsPage.css'
import { getSpotById } from '../../store/spotReducer';
import SpotsBrowserPage from '.';

const SpotCardDetail = ({ id, name }) => {
    const dispatch = useDispatch();
    const oneSpot = useSelector(state => state.spotState.listings[id])
    console.log("THIS IS ONE SPOT", oneSpot)

    // useEffect(() => {
    //     dispatch(getSpotById(id))
    // }, [dispatch, id])

    return (
        <li className="spot-detail">
            <div className='card-dets'>
                <div className='spot-info'>
                    <h2>{name}</h2>
                    <NavLink key={oneSpot.id} to={`/spots/${id}`}>{oneSpot.name}</NavLink>
                    <div>{oneSpot.address}</div>
                    <div>{oneSpot.city}, {oneSpot.state}</div>
                    <div>${oneSpot.price}</div>
                </div>
                <div>
                    <img className='card-image' id={id} key={oneSpot.id} src={oneSpot.Images[0]?.url}></img>
                </div>
            </div>
        </li>
    )
}

export default SpotCardDetail;
