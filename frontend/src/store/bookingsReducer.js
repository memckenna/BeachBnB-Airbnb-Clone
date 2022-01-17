import BookingDetails from '../components/Bookings/BookingDetails';
import { csrfFetch } from './csrf';

const LOAD_BOOKINGS = 'booking/loadBookings';
const LOAD_ONE_BOOKING = 'booking/loadOneBooking'


export const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings,

});

export const loadOneBooking = (booking) => ({
    type: LOAD_ONE_BOOKING,
    booking
});



export const getAllBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`);

    const data = await response.json();
    dispatch(loadBookings(data))
}

export const getOneBooking = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`)

    const data = await response.json();
    dispatch(loadOneBooking(data));
}


const initialState = { trips: {} }

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_BOOKINGS: {
            newState = {...state}
            newState.trips = action.bookings.reduce((trips, booking) => {
                trips[booking.id] = booking
                return trips;
            }, {})
            return newState;
        }
        case LOAD_ONE_BOOKING: {
            newState = {...state}
            newState.trips[action.booking.id] = action.booking
            return newState;
        }

        default:
            return state;
    }
}


export default bookingReducer;
