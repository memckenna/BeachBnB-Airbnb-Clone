import BookingDetails from '../components/Bookings/BookingDetails';
import { csrfFetch } from './csrf';

const LOAD_BOOKINGS = 'booking/loadBookings';
const LOAD_ONE_BOOKING = 'booking/loadOneBooking';
const CREATE_NEW_BOOKING = 'booking/createNewBooking';
const UPDATE_BOOKING = 'booking/updateBooking';
const DELETE_BOOKING = 'booking/deleteBooking';


// -------------------- GET -------------------- //
export const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings,

});

export const getAllBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`);

    const data = await response.json();
    dispatch(loadBookings(data))
}

export const loadOneBooking = (booking) => ({
    type: LOAD_ONE_BOOKING,
    booking
});

export const getOneBooking = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`)

    const data = await response.json();
    dispatch(loadOneBooking(data));
}

// --------------------CREATE -------------------- //


export const createANewBooking = (booking) => ({
    type: CREATE_NEW_BOOKING,
    booking
})

export const createNewBooking = (booking) => async(dispatch) => {
    // const { startDate, endDate, spotId, userId } = booking;
    const response = await csrfFetch(`/api/bookings/new`, {
        method: 'POST',
        body: JSON.stringify(booking),
    });

    const newBooking = await response.json();
    dispatch(createANewBooking(newBooking));
    // console.log("NEW BOOKING THUNK", newBooking)
}

// -------------------- UPDATE -------------------- //


export const updateABooking = (booking) => ({
    type: UPDATE_BOOKING,
    booking
})

export const updateBooking = (updatedBooking, bookingId) => async(dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedBooking)
    });

    const bookingData = await response.json();
    dispatch(updateABooking(bookingData))
}

// -------------------- DELETE -------------------- //


export const deleteABooking = (booking, bookingId) => ({
    type: DELETE_BOOKING,
    booking,
    bookingId
})

export const deleteBooking = (bookingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
    });

    const bookingData = await response.json();
    dispatch(deleteABooking(bookingData, bookingId))
}


const initialState = { trips: {} }

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_BOOKINGS:
            newState = {...state}
            newState.trips = action.bookings.reduce((trips, booking) => {
                trips[booking.id] = booking
                return trips;
            }, {})
            return newState;
        case LOAD_ONE_BOOKING:
            newState = {...state}
            // console.log("ONE BOOKING STATE", newState)
            newState.trips[action.booking.id] = action.booking;
            return newState;
        case CREATE_NEW_BOOKING:
            newState = {...state}
            newState.trips[action.booking.id] = action.booking;
            console.log("NEW BOOKING STATE", newState)
            // newState.trips = {...newState.trips, [action.booking.id]: action.booking}
            return newState;
        case UPDATE_BOOKING:
            newState = {...state}
            newState.trips[action.booking.id] = action.booking;
            return newState;
        case DELETE_BOOKING:
            newState = {...state}
            delete newState.trips[action.booking.id]
            return newState;

        default:
            return state;
    }
}


export default bookingReducer;
