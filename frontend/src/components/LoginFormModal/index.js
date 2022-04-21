import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

function LoginFormModal() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [demoUser, setDemoUser] = useState(false);
  const [credential, setCredential] = useState("Demo-lition")
  const [password, setPassword] = useState("password")

  const onClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <button id='log-in-nav-button' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm onClose={onClose} />
          <div className='demo-user-modal'>
            <div className='demo-user-modal-text'>
              Log in as a Demo User
            </div>
            <div className='login-modal-demo'>
              <button className='demo-button' onClick={() => dispatch(sessionActions.login({ credential, password }))}  >DEMO</button>
            </div>
          </div>
        </Modal>
      )}


    </>
  );
}

export default LoginFormModal;
