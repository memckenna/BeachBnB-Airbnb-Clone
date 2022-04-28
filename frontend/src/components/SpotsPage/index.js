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

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    return (
        <div>
            <h1 className='spots-header'>{spots?.length} beach stays suggestions</h1>
            <ul className='spots-container'>
                {spots.map(spot => (
                    <div key={spot?.id}>
                        <SpotCardDetail key={spot?.id} id={spot.id} name={spot.name}  />
                        {/* <a href={`https://www.google.com/maps/place/${spot.city}+${spot.state}+${spot.country}`} target="_blank">{spot.city}, {spot.state}, {spot.country}</a> */}
                    </div>
                ))}
            </ul>
            {/* <ul className='spots-container'>
                {spots.map(({ id, name }) => (
                    <SpotCardDetail key={id} id={id} name={name}  />

                ))}
            </ul> */}


        </div>
    )
}

export default SpotsBrowserPage;
