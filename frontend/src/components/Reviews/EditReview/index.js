import React, { useState } from "react";
import { useSelector } from "react-redux";

import EditAReview from "./EditAReview";
import { EditReviewModal } from "../../../context/Modal";

import '../Reviews.css';

const EditReviewOnSpot = ({ spotId, review, reviewId }) => {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);


    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="edit-review-modal-button-container">
                {sessionUser?.id === review.userId && (
                    <div>
                        <button className="edit-review-modal-button" onClick={() => setShowModal(true)}>
                            <i
                                className="far fa-edit review-edit-icon"
                                // className="fas fa-ellipsis-h review-edit-icon"
                                onClick={() => setShowModal(true)}
                            ></i>
                        </button>
                    </div>
                )}
                {showModal && (
                    <EditReviewModal onClose={() => setShowModal(false)}>
                        <EditAReview spotId={spotId} reviewObj={review} reviewId={reviewId} onClose={onCloseModal} />
                    </EditReviewModal>
                )}

            </div>
        </>
    )
}

export default EditReviewOnSpot;
