import React, { useState } from "react";
import { useSelector } from "react-redux";


import { EditReviewModal } from "../../../context/Modal";
import EditAReview from "./EditAReview";


const EditReviewOnSpot = ({ spotId, review, reviewId }) => {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);


    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div>
                {sessionUser?.id === review.userId && (
                    <div>
                        <button onClick={() => setShowModal(true)}>
                            <i
                                className="fas fa-ellipsis-h comment-edit-icon"
                                onClick={() => setShowModal(true)}
                            ></i>
                        </button>
                    </div>
                )}
                {showModal && (
                    <EditReviewModal>
                        <EditAReview spotId={spotId} reviewObj={review} reviewId={reviewId} onClose={onCloseModal} />
                    </EditReviewModal>
                )}

            </div>
        </>
    )
}

export default EditReviewOnSpot;
