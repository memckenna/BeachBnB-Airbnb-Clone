import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
// import { getAllSpots } from '../../store/spotReducer';
import { loadUser, loadUserHostedSpots } from '../../store/userReducer';
import SpotCardDetail from './SpotDetailPage';

import "./SpotsPage.css"

const ManageHostSpots = () => {
    const dispatch = useDispatch();
    // const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const user = useSelector(state => state.userState)
    console.log(user)
    const spotsObject = useSelector(state => state.spotState.listings);
    const spots = Object.values(spotsObject);
    console.log(spots)

    useEffect(() => {
        loadUserHostedSpots(sessionUser?.id)
    }, [dispatch]);

    return (
        <div className='host-spots-container'>
            {spots?.map(spot => (
                sessionUser?.id === spot?.User?.id &&
                    <div>
                        {console.log(spot.id)}
                        <SpotCardDetail key={spot?.User?.id} />
                    </div>
            ))}
        </div>

    )
}

export default ManageHostSpots;
