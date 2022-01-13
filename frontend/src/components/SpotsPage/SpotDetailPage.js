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
                    <div>
                        <h2 className='card-header'>{name}</h2>
                    </div>
                    <NavLink className={"navlink-card"} key={oneSpot.id} to={`/spots/${id}`}>{oneSpot.name}</NavLink>
                    <div className='city-state'>
                        <div>{oneSpot.address} |</div>
                        <div className='city'>{oneSpot.city}, </div>
                        <div>{oneSpot.state}</div>
                    </div>
                    <div className='bed-bath'>
                        <div>Bedrooms: {oneSpot.bedrooms} </div>
                        <div className='baths'>Baths: {oneSpot.baths}</div>
                    </div>
                    <div className='card-price'>${oneSpot.price}/night</div>
                </div>
                <div>
                    <NavLink className={"navlink-card"} key={oneSpot.id} to={`/spots/${id}`}>
                        <img className='card-image' id={id} key={oneSpot.id} src={oneSpot.Images[0]?.url}></img>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}

export default SpotCardDetail;
