import { csrfFetch } from './csrf';

const LOAD_BOOKINGS = 'booking/loadBookings';


export const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings,
    // user: bookings.userId
});

export const getAllBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`);

    const data = await response.json();
    dispatch(loadBookings(data))
}


const initialState = { bookings: {} }

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_BOOKINGS: {
            newState = {...state}
            newState.bookings = action.bookings.reduce((bookings, booking) => {
                bookings[booking.id] = booking
                return bookings;
            }, {})
            return newState;
        }

        default:
            return state;
    }
}


export default bookingReducer;
