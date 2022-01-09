import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SingupForm";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import './SignupForm.css';


const SignupFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
          <button id="sign-up-but" onClick={() => setShowModal(true)}>Sign Up</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <SignupForm />
            </Modal>
          )}
        </>
      );
}

export default SignupFormModal;
