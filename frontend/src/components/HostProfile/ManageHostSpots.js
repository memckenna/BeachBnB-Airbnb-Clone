import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getAllSpots } from '../../store/spotReducer';
import { loadUser, loadUserHostedSpots } from '../../store/userReducer';
import EditSingleSpotModal from '../SpotsPage/EditSpotModal';
import SpotCardDetail from '../SpotsPage/SpotDetailPage';
import { removeSpot } from '../../store/spotReducer';
import { getSpotById } from '../../store/spotReducer';
import "./ManageHost.css"

const ManageHostSpots = () => {
    const dispatch = useDispatch();
    // const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)
    const user = useSelector(state => state.userState[1])
    console.log(user)
    // const oneSpot = useSelector(state => state.spotState.listings)
    // console.log(oneSpot)

    const onClick = () => {

    }


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
                            <img className='host-spot-image' src={spot?.Images[0]?.url} />
                        </div>
                        <div className='host-spot-details'>
                            <div>
                                {spot?.name}
                            </div>
                            <div>
                                {spot?.city}, {spot?.state}
                            </div>
                            <div>Add Edit Listing
                                <EditSingleSpotModal/>
                            </div>
                            <div>
                                <button onClick={() => dispatch(removeSpot(spot?.id))}>Add Delete Listing</button>
                            </div>
                        </div>
                        {/* <SpotCardDetail key={sessionUser?.id} /> */}
                    </div>
            ))}
        </div>

    )
}

export default ManageHostSpots;
