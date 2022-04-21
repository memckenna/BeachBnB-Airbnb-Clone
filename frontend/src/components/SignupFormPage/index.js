import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SingupForm";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import './SignupForm.css';


const SignupFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    const onClose = () => {
      setShowModal(false)
    }

    return (
        <>
          <button id="sign-up-nav-button" onClick={() => setShowModal(true)}>Sign Up</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <SignupForm onClose={onClose} />
            </Modal>
          )}
        </>
      );
}

export default SignupFormModal;
