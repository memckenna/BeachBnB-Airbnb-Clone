
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import './SpotsPage.css'
import { getSpotById } from '../../store/spotReducer';
import SpotsBrowserPage from '.';

const SpotCardDetail = ({ id, name }) => {
    // const { spotId } = useParams();
    const dispatch = useDispatch();
    const oneSpot = useSelector(state => state.spotState.listings[id])
    console.log("THIS IS ONE SPOT", oneSpot)



    // useEffect(() => {
    //     dispatch(getSpotById(id))
    // }, [dispatch, id])



    return (
        <li className="spot-detail">
            <h2>{name}</h2>
            <NavLink key={oneSpot.id} to={`/spots/${id}`}>{oneSpot.name}</NavLink>
            <div>{oneSpot.address}</div>
            <div>{oneSpot.city}, {oneSpot.state}</div>
            <div>${oneSpot.price}</div>
            <img id={id} key={oneSpot.id} src={oneSpot.Images[0].url}></img>
        </li>
    )
}

export default SpotCardDetail;
