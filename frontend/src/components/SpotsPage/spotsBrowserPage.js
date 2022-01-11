import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';


import { getAllSpots } from '../../store/spotReducer';

const SpotsBrowserPage = () => {
    const dispatch = useDispatch();
    // const { spotId } = useParams();
    const spotsObject = useSelector(state => state.spotState.listings);
    const spots = Object.values(spotsObject);

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <div>
            <h1>Spots List</h1>
        </div>
    )
}
