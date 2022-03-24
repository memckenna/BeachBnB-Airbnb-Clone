import { csrfFetch } from './csrf';

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const LOAD_ONE_REVIEW = 'reviews/LOAD_ONE_REVIEW';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';


// -------------------- GET -------------------- //
export const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
});

export const getAllSpotReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`);

    const data = await response.json();
    dispatch(loadReviews(data));
}


export const loadOneReview = (review) => ({
    type: LOAD_ONE_REVIEW,
    review
});

export const getOneSpotReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`)

    const data = await response.json();
    dispatch(loadOneReview(data));
}


// --------------------CREATE -------------------- //

export const createANewReview = (review) => ({
    type: CREATE_REVIEW,
    review
});

export const createNewReview = (review) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/new`, {
        method: 'POST',
        body: JSON.stringify(review)
    });

    const newReview = await response.json();
    dispatch(createANewReview(newReview))
}


// -------------------- UPDATE -------------------- //

export const updateAReview = (review) => ({
    type: UPDATE_REVIEW,
    review
});

export const updateReview = (updateReview, reviewId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        body: JSON.stringify(updateReview)
    });

    const reviewData = await response.json();
    dispatch(updateAReview(reviewData))
}


// -------------------- DELETE -------------------- //

export const deleteAReview = (review, reviewId) => ({
    type: DELETE_REVIEW,
    review,
    reviewId
});

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    });

    const reviewData = await response.json();
    dispatch(deleteAReview(reviewData, reviewId))
}


const reviewReducer = (state = {}, action) => {
    let newState ={}
    switch(action.type) {
        case LOAD_REVIEWS:
            // newState = { ...state, ...action.reviews }
            action.reviews.forEach(review => {newState[review.id] = review})
            return newState;
        case LOAD_ONE_REVIEW:
            newState = { ...state }
            newState[action.review.id] = action.review;
            return newState;
        case CREATE_REVIEW:
            newState = { ...state }
            newState[action.review.id] = action.review;
            console.log("CREATE REVIEW STATE", newState)
            return newState;
        case UPDATE_REVIEW:
            newState = { ...state }
            newState[action.review.id] = action.review;
            return newState;
        case DELETE_REVIEW:
            newState = { ...state }
            delete newState[action.review.id]
            return newState;

        default:
            return state;
    }
}

export default reviewReducer;
