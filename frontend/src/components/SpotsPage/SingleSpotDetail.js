import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { getSpotById, removeSpot } from '../../store/spotReducer';
import BookingCalendar from '../Bookings/BookingCalendar';
import { getAllSpotReviews } from '../../store/reviewReducer';
import GetAllReviewsOnSpot from '../Reviews/GetAllReviews';
import EditSingleSpotModal from './EditSpotModal';
import CreateAReview from '../Reviews/CreateAReview';
import moment from "moment";
import './SpotsPage.css'

const SingleSpotDetailPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const sessionUser = useSelector((state) => state.session.user);
    const oneSpot = useSelector(state => state.spotState.listings[id])
    // const bookingObj = useSelector(state => state.bookingState.trips[id])
    // const reviewObj = useSelector(state => state.reviewState)
    // const reviews = Object.values(reviewObj)
    console.log("SINGLE SPOT", oneSpot)


    useEffect(() => {
        dispatch(getSpotById(id))
        dispatch(getAllSpotReviews())
        // dispatch(getOneBooking(bookingObj?.id))
    }, [dispatch, id])


    return (
        <div className='single-spot-detail-container'>
            <div className='spot-detail-page'>
                <div className='single-spot-header'>
                    <h2 className='single-spot-name'>{oneSpot?.name}</h2>
                    <div className='spot-address'>
                        <a className='spot-address' href={`https://www.google.com/maps/place/${oneSpot?.city}+${oneSpot?.state}+${oneSpot?.country}`} target="_blank">{oneSpot?.city}, {oneSpot?.state}, {oneSpot?.country}</a>
                        {/* <div>{oneSpot?.address}</div><div>{oneSpot?.city}, {oneSpot?.state}</div> */}
                    </div>
                </div>
                {oneSpot?.Images?.length > 1 ? (
                    <div className='spot-images-multiple-div'>
                        <div className='spot-images-multiple-div-left'>
                            <img className='spot-images-left' id={id}  src={oneSpot?.Images[0]?.url}></img>
                        </div>
                        <div className='spot-images-multiple-div-right'>
                            <img className='spot-images-right' id={id} src={oneSpot?.Images[1]?.url}></img>
                            <img className='spot-images-right' id={id} src={oneSpot?.Images[2]?.url}></img>
                        </div>
                    </div>
                ) : (
                    <div className='spot-images-div'>
                        <img className='spot-images' id={id} key={oneSpot?.id} src={oneSpot?.Images[0]?.url}></img>
                    </div>
                )}
                {/* <img className='spot-images' id={id} key={oneSpot?.id} src={oneSpot?.Images[0]?.url}></img> */}
                <div className='single-spot-price'>
                    <div className='single-spot-price-div'>
                        <div className='price-div'>${oneSpot?.price}</div>
                        <div className='slash-div'> / </div>
                        <div className='night-div'>night</div>
                    </div>
                </div>
                <div className='detail-section'>
                    <h3 className='details-header'>Home Details</h3>
                    <div className='home-details'>
                        <div className='single-bed-bath'>
                            {oneSpot?.bedrooms > 1 ? (
                                <div className='beds'>{oneSpot?.bedrooms} bedrooms</div>
                            ) : (
                                <div className='beds'>{oneSpot?.bedrooms} bedroom</div>
                            )
                            }
                            <div className='single-dot-separator'>
                                <i className="fas fa-circle"></i>
                            </div>
                            {oneSpot?.baths > 1 ? (
                                <div className='baths'>{oneSpot?.baths} baths</div>
                            ) : (
                                <div className='baths'>{oneSpot?.baths} bath</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='calendar-edit-details-container'>
                    <div className='calendar-edit-section'>
                        {sessionUser?.id === oneSpot?.userId ?
                            <div className='edit-delete-button-div'>
                                <div className='owner-edit-button-div'>
                                    <EditSingleSpotModal />
                                    {/* <NavLink className="owner-edit-btn-nav" to={`/spots/${oneSpot?.id}/edit`} >
                                        <button className='edit-listing-button'>
                                            <div className='edit-listing-button-text'>
                                                Edit your home's details
                                            </div>
                                            <div className='edit-listing-button-arrow'>
                                                <i className="fas fa-angle-right"></i>
                                            </div>
                                        </button>
                                    </NavLink> */}
                                </div>
                                <div className='owner-delete-button-div'>
                                    <button onClick={() => dispatch(removeSpot(oneSpot?.id)).then(() => history.push('/spots'))} className='delete-listing-button'>
                                        <div className='edit-listing-button-text'>
                                            Delete your home
                                        </div>
                                        <div className='edit-listing-button-arrow'>
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                    </button>
                                </div>
                            </div> :
                            <BookingCalendar spot={oneSpot} />
                        }
                    </div>
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
                                    <p>Check yourself in with the smartlock</p>
                                </div>
                                <div>
                                    <h3>Free cancellation for 48 hours</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reviews-container'>
                    <GetAllReviewsOnSpot id={oneSpot?.id} />
                    <CreateAReview spotId={oneSpot?.id} />
                </div>
                <div className='single-spot-where-div'>
                    <h3 className='single-spot-where-header'>Where you'll be</h3>
                    <div className='single-spot-where-address-div'>
                        <div className='single-spot-where-address'>{oneSpot?.address}</div>
                        <div className='single-spot-where-address'>{oneSpot?.city}, {oneSpot?.state} {oneSpot?.zipcode} </div>
                    </div>
                    <div className='single-spot-where-link-div'>
                        <a className='single-spot-where-link' href={`https://www.google.com/maps/place/${oneSpot?.city}+${oneSpot?.state}+${oneSpot?.country}`} target="_blank">
                            {`https://www.google.com/maps/place/${oneSpot?.city}+${oneSpot?.state}+${oneSpot?.country}`}
                        </a>
                    </div>
                </div>
                <div className='single-spot-host'>
                    <h3>Hosted by {oneSpot?.User?.username}</h3>
                    <div className='single-spot-host-details'>
                        About your host
                    </div>
                </div>
                {/* <div>
                    <h3>Things to know</h3>
                </div> */}
            </div>

        </div>
    )
}

export default SingleSpotDetailPage;
