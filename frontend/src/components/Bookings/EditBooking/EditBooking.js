import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import { getOneBooking, updateBooking } from "../../../store/bookingsReducer";

import "./EditBooking.css"

const EditBooking = ({ onClose }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams()
    const bookingObj = useSelector(state => state.bookingState.trips[id])
    const sessionUser = useSelector(state => state.session.user)
    console.log(bookingObj.startDate)
    const [startDate, setStartDate] = useState(new Date(bookingObj.startDate));
    const [endDate, setEndDate] = useState(new Date(bookingObj.endDate));
    const start = moment(startDate)
    const end = moment(endDate)
    // const [startDate, setStartDate] = useState(bookingObj.startDate);
    // const [endDate, setEndDate] = useState(bookingObj.endDate);
    console.log(new Date(bookingObj.endDate))
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
        <div className="edit-booking">
            <h2 className="edit-reservations-header">Edit your reservations</h2>
            <div className="edit-booking-calendar-price-section">
                <div className="edit-booking-calendar-price">${bookingObj?.Spot?.price}</div>
                <div className="edit-booking-calendar-night"> / night</div>
            </div>
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
                            // openToDate={}
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
                            // openToDate={}
                            />
                        </div>

                    </div>
                    <div className='reserve'>
                        <button type="submit" className='reserve-button'>Update Reservation</button>
                        <div className='reserve-text'>Please select new dates</div>
                    </div>
                </form>
            </div>
            {startDate && endDate && (
                <div>
                    <div className='reserve-text'>You won't be charged yet</div>
                    <div className="dates-selected-pricing-div">
                        <div className="dates-selected-pricing">
                            {/* You selected {moment(startDate).format("LL")} to{" "}
                                        {moment(endDate).format("LL")} */}
                            ${parseFloat(bookingObj?.Spot?.price)} X {Math.round(moment.duration(end.diff(start)).asDays())} nights
                        </div>
                        <div className="dates-selected-pricing-total">
                            ${Math.round(moment.duration(end.diff(start)).asDays()) * parseFloat(bookingObj?.Spot?.price)}
                        </div>
                    </div>
                    <div className="dates-selected-pricing-div">
                        <div className="dates-selected-pricing">Cleaning fee</div>
                        <div className="dates-selected-pricing-total"> $150 </div>

                    </div>
                    <div className="dates-selected-pricing-div">
                        <div className="dates-selected-pricing">Service fee</div>
                        <div className="dates-selected-pricing-total-last"> $0 </div>

                    </div>
                    <div className="dates-selected-total-price-div">
                        <div className="total-before-taxes">Total before taxes</div>
                        <div>${Math.round(moment.duration(end.diff(start)).asDays()) * parseFloat(bookingObj?.Spot?.price) + Number(150)}</div>

                    </div>
                </div>

            )}
        </div>
    )
}

export default EditBooking;
