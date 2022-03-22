import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { getSpotById } from '../../store/spotReducer';
import EditSpotForm from './EditSpotForm'
import { removeSpot } from '../../store/spotReducer';
import BookingCalendar from '../Bookings/BookingCalendar';
import { createNewBooking } from '../../store/bookingsReducer';
// import * as sessionActions from "../../store/session";


import './SpotsPage.css'

const SingleSpotDetailPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const spot = useSelector(state => state.spotState)
    const sessionUser = useSelector((state) => state.session.user);
    const oneSpot = useSelector(state => state.spotState.listings[id])
    console.log("SPOT STATE", spot.listings[id])
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
            </div>
            {sessionUser?.id === oneSpot?.userId ?
                <div className='edit-delete-button'>
                    <div>
                        <NavLink to={`/spots/${oneSpot?.id}/edit`} >
                            <button className='edit-listing'>Edit Listing</button>
                        </NavLink>
                    </div>
                    <div>
                        <button onClick={() => dispatch(removeSpot(oneSpot?.id)).then(() => history.push('/spots'))} className='edit-listing'>Delete Listing</button>
                    </div>
                </div> :
                <BookingCalendar spot={oneSpot}/>

                // <div className='booking-section'>
                //     <div className='booking'>
                //         <div className='booking-calendar'>

                //             <BookingCalendar />
                //         </div>
                //         <div className='reserve'>
                //             <button className='reserve-button'>Reserve</button>
                //             <div className='reserve-text'>You won't be charged yet</div>
                //         </div>
                //     </div>
                // </div>
            }
            <div className='home-info-container'>
                <div className='main-content'>
                    <div className='stay-info'>
                        <div>
                            <h3>Entire home</h3>
                            <p>You'll have the house to yourself</p>
                        </div>
                        <div>
                            <h3>Enhanced Clean</h3>
                            <p>This Host committed to Airbnb's 5-step enhanced cleaning process.</p>
                        </div>
                        <div>
                            <h3>Self check-in</h3>
                            <p>Check yourself in with the lockbox</p>
                        </div>
                        <div>
                            <h3>Free cancellation for 48 hours</h3>
                        </div>
                    </div>
                    <div className='home-description'>
                        <div>
                            <p>HOME DESCRIPTION PARAGRAPH</p>
                        </div>
                    </div>
                    <div className='sleep-info'>
                        <div>
                            <h3>Where you'll sleep</h3>
                        </div>
                    </div>
                    <div className='amenity-offerings'>
                        <div>
                            <h3>What this place offers</h3>
                        </div>
                    </div>
                    <div className='left-calendar'>
                        <div>
                            <h3>NUMBER nights in CITY (calendar underneith)</h3>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <h3>REVIEWS</h3>
            </div>
            <div>
                <h3>Where you'll be</h3>
            </div>
            <div>
                <h3>Hosted by HOSTNAME</h3>
            </div>
            <div>
                <h3>Things to know</h3>
            </div>
        </div>
    )
}

export default SingleSpotDetailPage;
