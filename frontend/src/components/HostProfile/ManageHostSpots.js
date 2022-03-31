import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getAllSpots } from '../../store/spotReducer';
import { loadUser, loadUserHostedSpots } from '../../store/userReducer';
import SpotCardDetail from '../SpotsPage/SpotDetailPage';
import "./ManageHost.css"

const ManageHostSpots = () => {
    const dispatch = useDispatch();
    // const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)
    const user = useSelector(state => state.userState[1])
    console.log(user)
    const spotsObject = useSelector(state => state.spotState.listings);
    const spots = Object.values(spotsObject);
    console.log(spots)

    useEffect(() => {
        dispatch(loadUserHostedSpots(sessionUser?.id))
        dispatch(loadUser(sessionUser?.id))
        // getAllSpots()
    }, [dispatch]);

    return (
        <div className='host-spots-container'>
            {user?.Spots?.map(spot => (
                sessionUser?.id === user?.id &&
                    <div key={spot?.id}>
                        {console.log(spot)}
                        <div>
                            <img className='host-spot-image' src={spot?.Images[0]?.url} />
                        </div>
                        <div>
                            {spot?.name}
                        </div>
                        {/* <SpotCardDetail key={sessionUser?.id} /> */}
                    </div>
            ))}
        </div>

    )
}

export default ManageHostSpots;
