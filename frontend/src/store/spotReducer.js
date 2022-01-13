import { csrfFetch } from './csrf';

const LOAD_SPOTS = 'spot/loadSpots';
const LOAD_ONE_SPOT = 'spot/loadOneSpot';
const ADD_SPOT = 'spot/addSpot';
const UPDATE_SPOT = 'spot/updateSpot';
const REMOVE_SPOT = 'spot/removeSpot';

//Action Creators - GET ALL SPOTS
export const loadSpots = (spots) => ({
    type: LOAD_SPOTS,
    spots
});

//GET ONE SPOT
export const loadOneSpot = (spot) => ({
    type: LOAD_ONE_SPOT,
    spot
})

export const addSpot = (newSpot) => ({
    type: ADD_SPOT,
    newSpot
});

export const updateSpot = (spot, spotId) => ({
    type: UPDATE_SPOT,
    spot,
    spotId
})

export const deleteSpot = (spotId) => ({
    type: REMOVE_SPOT,
    spotId
})

/* GET ALL SPOTS */
export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch(`/api/spots`);

    const data = await response.json();
    // console.log("THIS IS MY DATA", data)
    dispatch(loadSpots(data));
}

export const getSpotById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`);

    const data = await response.json();
    console.log("ONESPOT", data)

    dispatch(loadOneSpot(data))
}

export const createNewSpot = (newSpot) => async (dispatch) => {
    const { address, city, state, country, zipcode, name, bedrooms, baths, price, image } = newSpot;
    const response = await csrfFetch('/api/spots/new', {
        method: 'POST',
        body: JSON.stringify({
            address,
            city,
            state,
            country,
            zipcode,
            name,
            bedrooms,
            baths,
            price,
            image,
        })
    });
    const data = await response.json();
    dispatch(addSpot(data))
    return data;
}

export const updateASpot = (spot, spotId) => async (dispatch) => {
    const { address, city, state, country, zipcode, name, bedrooms, baths, price, image } = spot;

    const response = await csrfFetch(`/api/spots/${spotId}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            address,
            city,
            state,
            country,
            zipcode,
            name,
            bedrooms,
            baths,
            price,
            image,
        })
    });
    const data = await response.json();
    dispatch(updateSpot(data, spotId))
    return data;
}

export const removeSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'delete'
    });

    const spot = await response.json();
    dispatch(deleteSpot(spot));
}

const initialState = { listings: {} }

const spotReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_SPOTS: {
            newState = {...state}
            newState.listings = action.spots.reduce((listings, spot) => {
                    listings[spot.id] = spot
                    // console.log("MY LISTINGS", spot)
                    return listings;
                }, {})
                return newState;
        }
        case LOAD_ONE_SPOT: {
            newState = {...state};
            newState.listings[action.spot.id] = action.spot
            return newState;
        }
        case ADD_SPOT:
            newState = {...state}
            newState.listings = {...newState.listings, [action.newSpot.id]: action.newSpot}
            return newState;
        case UPDATE_SPOT:
            newState = {...state}
            newState.listings = {...newState.listings, [action.spot.id]: action.spot }
            return newState;
        case REMOVE_SPOT:
            newState = {...state}
            delete newState[action.spotId]
            return newState;
        default:
            return state;
    }
}


export default spotReducer;
