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


  // useEffect(() => {
  //   demoUser = dispatch(sessionActions.login({ credential, password }))
  // }, [dispatch, credential, password])

  return (
    <>
      <button id='log-in-nav-button' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}


      <button onClick={() => dispatch(sessionActions.login({ credential, password }))}  >DEMO USER</button>
    </>
  );
}

export default LoginFormModal;
