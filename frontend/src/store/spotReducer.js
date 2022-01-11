import { csrfFetch } from './csrf';

const LOAD_SPOTS = 'spot/loadSpots';
const ADD_SPOT = 'spot/addSpot';
const UPDATE_SPOT = 'spot/updateSpot';
const REMOVE_SPOT = 'spot/removeSpot';

//Action Creators
export const loadSpots = (spots) => ({
    type: LOAD_SPOTS,
    spots
});

export const addSpot = (newSpot) => ({
    type: ADD_SPOT,
    newSpot
});

/* GET ALL SPOTS */
export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch(`/api/spots`);

    const data = await response.json();
    dispatch(loadSpots(data.spots));
    return response;
}


const initialState = { listings: {}, isLoading: true }

const spotReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_SPOTS: {
            newState = {...state}
            newState.listings = action.spots.reduce((listings, spot) => {
                listings[spot.id] = spot;
                return listings;
            }, {});
            return newState;
        }
    }
}


export default spotReducer
