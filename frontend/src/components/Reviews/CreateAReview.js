import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { createNewReview, getOneSpotReview, getAllSpotReviews } from '../../store/reviewReducer';

const CreateAReview = ({spotId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const reviewObj = useSelector(state => state.reviewState)
    const reviews = Object.values(reviewObj);

    const [review, setReview] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newReview = {
            review,
            userId: sessionUser?.id,
            spotId: spotId
        }
        await dispatch(createNewReview(newReview))
        dispatch(getAllSpotReviews())
        setReview("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    className=''
                    placeholder='Leave a review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}

                />
                <button type='submit'>Create</button>
            </form>

        </div>
    )
}

export default CreateAReview;
