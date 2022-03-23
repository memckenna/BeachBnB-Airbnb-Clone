import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';

import { getAllSpotReviews } from '../../store/reviewReducer';

const GetAllReviewsOnSpot = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const reviewObj = useSelector(state => state.reviewState[id])
    console.log("GET ALL REVIEWS", reviewObj)

    useEffect(() => {
        dispatch(getAllSpotReviews())

    }, [dispatch])

    return (
        <div>

        </div>
    )
}

export default GetAllReviewsOnSpot;
