import { csrfFetch } from './csrf';

const LOAD_USER = 'users/LOAD_USER';
const LOAD_USER_HOST_SPOTS = 'users/LOAD_USER_HOST_SPOTS'
//Action
export const loadAUser = (user, userId) => {
    return {
        type: LOAD_USER,
        user,
        userId
    }
};
//Thunk
export const loadUser = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}`);
    const user = await response.json();
    dispatch(loadAUser(user, userId));
    console.log("USER THUNK", user)
    return user;
};
//Action
export const loadAUserHostedSpots = (spots, userId) => {
    return {
        type: LOAD_USER,
        spots,
        userId
    }
};

//Thunk
export const loadUserHostedSpots = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/host`);
    const spots = await response.json();
    dispatch(loadAUserHostedSpots(spots, userId));
    console.log("USER THUNK", spots)

    return spots;
};


const userReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case LOAD_USER:
            newState = { ...state }
            newState[action.userId] = action.user;
            return newState;
        case LOAD_USER_HOST_SPOTS:
            newState = { ...state }
            newState[action.userId] = action.user;
            return newState;

        default:
            return state;
    }
};

export default userReducer;
