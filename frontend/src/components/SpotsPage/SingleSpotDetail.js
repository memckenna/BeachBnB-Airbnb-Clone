import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getSpotById } from '../../store/spotReducer';
import EditSpotForm from './EditSpotForm'
import { removeSpot } from '../../store/spotReducer';
// import * as sessionActions from "../../store/session";


import './SpotsPage.css'

const SingleSpotDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const oneSpot = useSelector(state => state.spotState.listings[id])
    // const sessionUser = useSelector((state) => state.session.user);
    // const [deleteSpot, setDeleteSpot] = useEffect(false)

    // const [showEditSpotForm, setShowEditSpotForm] = useState(false)

    useEffect(() => {
        dispatch(getSpotById(id))
    }, [dispatch, id])



    return (
        <div className='spot-detail-page'>
            <h2>{oneSpot?.name}</h2>
            <div className='spot-address'>
                <div>{oneSpot?.address}</div>
                <div>{oneSpot?.city}, {oneSpot?.state}</div>
            </div>
            <div>
                <img className='spot-images' id={id} key={oneSpot?.id} src={oneSpot?.Images[0]?.url}></img>
            </div>
            <div className='spot-price'>
                <div>${oneSpot?.price}/night</div>
            </div>
            <div className='detail-section'>
                <h3 className='details-header'>Home Details</h3>
                <div className='home-details'>
                    <div className='beds'>Bedrooms: {oneSpot?.bedrooms}</div>
                    <div className='baths'> Baths: {oneSpot?.baths}</div>
                </div>
                {/* <div className='spot-price'>
                    <div>${oneSpot?.price}/night</div>
                </div> */}
            </div>
            <div className='edit-delete-button'>
                <div>
                    <NavLink to={`/spots/${oneSpot?.id}/edit`} >
                        <button className='edit-listing'>Edit Listing</button>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={`/spots`} >
                        <button onClick={() => dispatch(removeSpot(oneSpot?.id))} className='edit-listing'>Delete Listing</button>
                    </NavLink>
                </div>
            </div>

            {/* <Route path="/spots/:id">
                <EditSpotForm  />
            </Route> */}


            {/* Add Reviews and Bookings */}
        </div>
    )
}

export default SingleSpotDetailPage;
