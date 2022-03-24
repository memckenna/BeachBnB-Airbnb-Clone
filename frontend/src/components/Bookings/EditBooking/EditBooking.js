import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { getOneBooking, updateBooking } from "../../../store/bookingsReducer";

import "./EditBooking.css"

const EditBooking = ({onClose}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams()
    const bookingObj = useSelector(state => state.bookingState.trips[id])
    const sessionUser = useSelector(state => state.session.user)
    console.log(bookingObj.startDate)
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    // const [startDate, setStartDate] = useState(bookingObj.startDate);
    // const [endDate, setEndDate] = useState(bookingObj.endDate);

    useEffect(() => {
        dispatch(getOneBooking(id))
    }, [dispatch, id])

    const handleStartDate = (date) => {
        setStartDate(date)
        setEndDate(null)
    }
    const handleEndDate = (date) => {
        setEndDate(date)
    }

    const editBooking = async (e) => {
        e.preventDefault()

        const editedBooking = {
            startDate,
            endDate,
            spotId: bookingObj?.spotId,
            userId: sessionUser?.id
        };

        await dispatch(updateBooking(editedBooking, id))
        dispatch(getOneBooking(id))
        onClose()
    }

    return (
        <div>
            <div className="edit-booking-calendar-price"><strong>${bookingObj?.Spot?.price}</strong> / night</div>
            <div className='edit-booking-calendar'>
                <form onSubmit={editBooking} className="edit-datepicker">
                    <div className="edit-booking-calendar-dates">
                        <div className="checkin">
                            <h3>Check-in</h3>
                            <DatePicker
                                className="edit-date"
                                selected={startDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                minDate={new Date()}
                                onChange={handleStartDate}

                            // onChange={newDate => setStartDate(newDate)}

                            />
                        </div>
                        <div className="checkout">
                            <h3>Checkout</h3>
                            <DatePicker
                                className="edit-date"
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                onChange={handleEndDate}
                            // onChange={newDate => setEndDate(newDate)}

                            />
                        </div>

                    </div>
                    <div className='reserve'>
                        <button type="submit" className='reserve-button'>Update Reservation</button>
                        <div className='reserve-text'>Please select new dates</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditBooking;
