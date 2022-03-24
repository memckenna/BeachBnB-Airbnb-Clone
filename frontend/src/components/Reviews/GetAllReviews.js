import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';

import { getAllSpotReviews } from '../../store/reviewReducer';
import { getSpotById } from '../../store/spotReducer';
import EditReviewOnSpot from './EditReview';
import moment from "moment";

import './Reviews.css';


const GetAllReviewsOnSpot = ({ id }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const oneSpot = useSelector(state => state.spotState.listings[id])
    // console.log("GET ALL ONE SPOT", oneSpot)
    const reviewObj = useSelector(state => state.reviewState)
    // const reviews = Object.values(reviewObj)
    // console.log("GET ALL REVIEWS", reviewObj)
    // console.log(reviews)

    useEffect(() => {
        dispatch(getAllSpotReviews())
        // dispatch(getSpotById(id))
    }, [dispatch])

    return (
        <div>
            <h3>REVIEWS</h3>
            <div >
                {oneSpot?.Reviews?.map(review => (
                    <div key={review?.id} className='reviews-div'>
                        <div className='review-user-created'>
                            <div className='review-user'>{review?.User?.username}</div>
                            <div>{moment(review?.createdAt).format("LLL")}</div>
                        </div>
                        <div>{review?.review}</div>
                        {/* <button> */}
                            <EditReviewOnSpot spotId={id} review={review} reviewId={review?.id} />
                            {/* <EditAReview spotId={id} reviewObj={review} reviewId={review?.id} /> */}
                        {/* </button> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetAllReviewsOnSpot;