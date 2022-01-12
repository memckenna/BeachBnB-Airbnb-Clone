import { csrfFetch } from './csrf';

const LOAD_SPOTS = 'spot/loadSpots';
const LOAD_ONE_SPOT = 'spot/loadOneSpot';
const ADD_SPOT = 'spot/addSpot';
// const UPDATE_SPOT = 'spot/updateSpot';
// const REMOVE_SPOT = 'spot/removeSpot';

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

// export const updateSpot = (spot) => ({
//     type: UPDATE_SPOT,
//     spot
// })

// export const deleteSpot = (spotId, userId) => ({
//     type: REMOVE_SPOT,
//     spotId,
//     userId
// })

/* GET ALL SPOTS */
export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch(`/api/spots`);

    const data = await response.json();
    // console.log("THIS IS MY DATA", data)
    dispatch(loadSpots(data));
    // console.log("THIS IS MY REPSONSE", response)
    return response; //ask if I should be returning reposnse or data
    // return data
}

export const getSpotById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`);

    const data = await response.json();
    console.log("ONESPOT", data)

    dispatch(loadOneSpot(data))
    return response; //ask if I should be returning reposnse or data
    // return data;
}

export const createNewSpot = (newSpot) => async (dispatch) => {
    const { address, city, state, country, zipcode, name, price, image, userId } = newSpot;
    const response = await csrfFetch('/api/spots/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            address,
            city,
            state,
            country,
            zipcode,
            name,
            price,
            image,
            userId
        })
    });
    const data = await response.json();
    console.log("CREATE NEW SPOT", data)
    dispatch(addSpot(data))
    return data;

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
            newState = {
                ...state,
            };
            newState.listings[action.spot.id] = action.spot
            return newState;
        }
        case ADD_SPOT:
            newState = {...state}
            newState.listings = {...newState.listings, [action.newSpot.id]: action.newSpot}
            return newState;

        default:
            return state;
    }
}


export default spotReducer;
