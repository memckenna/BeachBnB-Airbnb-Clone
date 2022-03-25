import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { EditSpotModal } from '../../context/Modal';
import EditSpotForm from './EditSpotForm';
import './SpotsPage.css';


const EditSingleSpotModal = () => {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);


    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className='edit-single-spot-container'>
                <div>
                    <button className='edit-listing-button' onClick={() => setShowModal(true)}>
                        <div className='edit-listing-button-text' onClick={() => setShowModal(true)}>
                            Edit your home's details
                        </div>
                        <div className='edit-listing-button-arrow' onClick={() => setShowModal(true)}>
                            <i className="fas fa-angle-right"></i>
                        </div>

                    </button>
                </div>
                {showModal && (
                    <EditSpotModal onClose={() => setShowModal(false)}>
                        <EditSpotForm onClose={onCloseModal} />
                    </EditSpotModal>
                )}

            </div>
        </>
    )
}

export default EditSingleSpotModal;
