import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { getOneSpotReview, getAllSpotReviews, updateReview, deleteReview } from '../../../store/reviewReducer';
import { getSpotById } from '../../../store/spotReducer';
import '../Reviews.css'

const EditAReview = ({ spotId, reviewId, reviewObj, onClose }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    // const reviewObj = useSelector(state => state.reviewState)

    const [review, setReview] = useState(reviewObj?.review);
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState([])


    useEffect(() => {

    },[dispatch, reviewId])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const editReview = {
            review,
            userId: sessionUser?.id,
            spotId: spotId
        }

        const data = await dispatch(updateReview(editReview, reviewId))
        dispatch(getSpotById(spotId))
        dispatch(getAllSpotReviews())

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            dispatch(getSpotById(spotId))
            onClose()
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()

        const data = await dispatch(deleteReview(reviewId))
        // dispatch(getSpotById(spotId))
        dispatch(getAllSpotReviews())

        if(data?.errors) {
            setErrors(data.errors)
        } else {
            onClose()
            dispatch(getSpotById(spotId))
        }
    }

    return (
        <div className='edit-review-modal-form-container'>
            <h3>Edit your review</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className='edit-review-modal-textarea'
                    type="text"
                    placeholder='Edit a review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}

                />
                <div className='edit-review-modal-buttons'>
                    <div className='save-edit-modal-btn-div'>
                        <button className='save-edit-modal-btn' type='submit'>Save</button>
                    </div>
                    <div className='delete-edit-modal-btn-div'>
                        <button className='delete-edit-modal-btn' type='submit' onClick={handleDelete} id={reviewObj?.id}>Delete</button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default EditAReview;
