import React, { useState } from "react";
import { EditBookingModal } from "../../../context/Modal";
import EditBooking from "./EditBooking";


const EditABookingModal = () => {
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div>
                <div>
                    <button onClick={() => setShowModal(true)} >Edit Booking</button>
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
