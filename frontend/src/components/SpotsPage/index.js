import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';


import { getAllSpots } from '../../store/spotReducer';
import SpotCardDetail from './SpotDetailPage';

const SpotsBrowserPage = () => {
    const dispatch = useDispatch();
    // const { spotId } = useParams();
    const spotsObject = useSelector(state => state.spotState.listings);

    const spots = Object.values(spotsObject);
    console.log("VALUES", spots)

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <div>
            <h1 className='spots-header'>Spots List</h1>
            <ul className='spots-container'>
                {spots.map(({ id, name }) => (
                    <SpotCardDetail key={id} id={id} name={name}  />
                ))}
            </ul>

        </div>
    )
}

export default SpotsBrowserPage;
