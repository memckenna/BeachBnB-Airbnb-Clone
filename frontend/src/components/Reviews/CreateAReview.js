import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { createNewReview, getOneSpotReview, getAllSpotReviews } from '../../store/reviewReducer';
import { getSpotById } from '../../store/spotReducer';
import './Reviews.css';

const CreateAReview = ({spotId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const reviewObj = useSelector(state => state.reviewState)
    const reviews = Object.values(reviewObj);

    const [review, setReview] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState([])


    useEffect(() => {
        if(review.length > 0) setDisabled(false)
        else setDisabled(true)

    },[review, disabled])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newReview = {
            review,
            userId: sessionUser?.id,
            spotId: spotId
        }

        const data = await dispatch(createNewReview(newReview))
        // dispatch(getAllSpotReviews())

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            dispatch(getSpotById(spotId))
            setReview("")
        }
    }


    return (
        <div className='create-review-container'>
            <form className='create-review-form' onSubmit={handleSubmit}>
                <textarea
                    className='create-review-textarea'
                    type="text"
                    placeholder='Leave a review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}

                />
                <button className='create-review-button' disabled={disabled} type='submit'>Create</button>
            </form>

        </div>
    )
}

export default CreateAReview;
