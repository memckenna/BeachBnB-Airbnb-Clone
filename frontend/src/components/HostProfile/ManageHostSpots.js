import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { getAllSpots } from '../../store/spotReducer';
import { loadUser, loadUserHostedSpots } from '../../store/userReducer';
import EditSingleSpotModal from '../SpotsPage/EditSpotModal';
import SpotCardDetail from '../SpotsPage/SpotDetailPage';
import { removeSpot, getSpotById } from '../../store/spotReducer';

import "./ManageHost.css"

const ManageHostSpots = () => {
    const dispatch = useDispatch();
    const history = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    const user = useSelector(state => state.userState[1])

    // const oneSpot = useSelector(state => state.spotState.listings)

    const userSpot = user?.Spots.map((spot) => {
        console.log(spot)
        return spot
    })

    useEffect(() => {
        dispatch(loadUserHostedSpots(sessionUser?.id))
        dispatch(loadUser(sessionUser?.id))

    }, [dispatch, sessionUser]);

    return (
        <div className='host-spots-container'>
            <div>

            </div>
            <div className='hosting-header'>
                <div className='your-reservations'>
                    <h2>Your reservations</h2>
                </div>
                <div className='reservation-count'>
                    <div>All reservations({user?.Spots?.length})</div>
                </div>
            </div>
            {user?.Spots?.map(spot => (
                sessionUser?.id === user?.id &&
                    <div key={spot?.id} className='host-each-spot-container'>
                        {console.log(spot)}
                        <div className='host-spot-img-div'>
                        <NavLink  to={`spots/${spot?.id}`}>
                            <img className='host-spot-image' src={spot?.Images[0]?.url} />
                        </NavLink>
                        </div>
                        <div className='host-spot-details'>
                            <div className='host-spot-details-info'>
                                <div className='host-spot-name'>
                                    {spot?.name}
                                </div>
                                <div className='host-spot-city'>
                                    {spot?.city}, {spot?.state}
                                </div>
                            </div>
                            <div className='host-spot-details-link-div'>
                                <NavLink className="manage-host-spot-detail-link" to={`spots/${spot?.id}`}>Go to spot detail page to edit listing</NavLink>
                                {/* <EditSingleSpotModal/> */}
                            </div>
                            {/* <div>
                                <button onClick={() => dispatch(removeSpot(spot?.id))}>Add Delete Listing</button>
                            </div> */}
                        </div>
                        {/* <SpotCardDetail key={sessionUser?.id} /> */}
                    </div>
            ))}
        </div>

    )
}

export default ManageHostSpots;
