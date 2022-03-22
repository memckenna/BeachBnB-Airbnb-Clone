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

    // useEffect(() => {
    //     dispatch(getSpotById(id))
    // }, [dispatch, id])

    return (
        <li className="spot-detail">
            <div className='card-dets'>
                <div>
                    <NavLink className={"navlink-card"} key={oneSpot.id} to={`/spots/${id}`}>
                        <img className='card-image' id={id} key={oneSpot.id} src={oneSpot.Images[0]?.url}></img>
                    </NavLink>
                </div>
                <div className='spot-info'>
                    {/* <div>
                        <h2 className='card-header'>{name}</h2>
                    </div> */}
                    <NavLink className={"navlink-card"} key={oneSpot.id} to={`/spots/${id}`}>{oneSpot.name}</NavLink>
                    <div className='city-state'>
                        {/* <div>{oneSpot.address} |</div>
                        <div className='city'>{oneSpot.city}, </div>
                        <div>{oneSpot.state}</div> */}
                        <a href={`https://www.google.com/maps/place/${oneSpot.city}+${oneSpot.state}+${oneSpot.country}`} target="_blank">{oneSpot.city}, {oneSpot.state}, {oneSpot.country}</a>
                    </div>
                    <div className='bed-bath'>
                        <div className='beds'>{oneSpot.bedrooms} bedrooms</div>
                        {/* <div className='dot-separator'>
                            <i className="fas fa-circle"></i>
                        </div> */}
                        <div className='baths'>{oneSpot.baths} baths</div>
                    </div>
                    <div className='single-spot-price'>
                        <div className='card-price'>${oneSpot.price}/night</div>
                    </div>
                </div>
                {/* <div>
                    <NavLink className={"navlink-card"} key={oneSpot.id} to={`/spots/${id}`}>
                        <img className='card-image' id={id} key={oneSpot.id} src={oneSpot.Images[0]?.url}></img>
                    </NavLink>
                </div> */}
            </div>
        </li>
    )
}

export default SpotCardDetail;
