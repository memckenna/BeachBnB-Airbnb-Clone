import React, { useState } from "react";
import { EditBookingModal } from "../../../context/Modal";
import EditBooking from "./EditBooking";
import "./EditBooking.css"

const EditABookingModal = () => {
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div>
                <div className="edit-booking-button-div">
                    <button className="edit-booking-button" onClick={() => setShowModal(true)} >Edit Booking</button>
                </div>
                {showModal && (
                    <EditBookingModal onClose={() => setShowModal(false)}>
                        <EditBooking onClose={onCloseModal} />
                    </EditBookingModal>
                )}
            </div>
        </>
    )
}

export default EditABookingModal;
