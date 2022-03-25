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
                    <NavLink className={"navlink-card"} key={oneSpot?.id} to={`/spots/${id}`}>
                        <img className='card-image' id={id} key={oneSpot?.id} src={oneSpot?.Images[0]?.url}></img>
                    </NavLink>
                </div>
                <div className='spot-info'>
                    <div className='city-state'>{oneSpot?.city}, {oneSpot?.state}</div>
                    <NavLink className={"navlink-card"} key={oneSpot?.id} to={`/spots/${id}`}>{oneSpot?.name}</NavLink>
                    <div className='city-state'>
                        {/* <a href={`https://www.google.com/maps/place/${oneSpot.city}+${oneSpot.state}+${oneSpot.country}`} target="_blank">{oneSpot.city}, {oneSpot.state}, {oneSpot.country}</a> */}
                    </div>
                    <div className='divider'></div>
                    <div className='bed-bath'>
                        {oneSpot?.bedrooms > 1 ? (
                            <div className='all-spot-beds'>{oneSpot?.bedrooms} bedrooms</div>
                        ) : (
                            <div className='all-spot-beds'>{oneSpot?.bedrooms} bedroom</div>
                        )
                        }
                        <div className='dot-separator'>
                            <i className="fas fa-circle"></i>
                        </div>
                        {oneSpot?.baths > 1 ? (
                            <div className='all-spot-baths'>{oneSpot?.baths} baths</div>
                        ) : (
                            <div className='all-spot-baths'>{oneSpot?.baths} bath</div>
                        )}
                    </div>
                    <div className='spot-page-price-div'>
                        <div className='card-price'>
                            <div className='price-div'>${oneSpot?.price}</div>
                            <div className='slash-div'> / </div>
                            <div className='night-div'>night</div>
                        </div>
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
