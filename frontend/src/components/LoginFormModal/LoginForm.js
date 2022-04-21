import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';

import './LoginForm.css';

function LoginForm({onClose}) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className='login-container'>
            <div className='login-header-exit'>
                <h1 className='login-header'>Log in</h1>
                <i onClick={onClose} className="fas fa-times exit"></i>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <h2 className='welcome-header'>Welcome to BeachBnB</h2>
                <label className='login-input-container'>
                    <input
                        className='login-input-field'
                        type="text"
                        onChange={(e) => setCredential(e.target.value)}
                        value={credential}
                        placeholder='Username or Email'
                        required
                    />
                </label>
                <label className='login-input-container'>
                    <input
                        className='login-input-field'
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Password'
                        required
                    />
                </label>
                <button className='login-button' type="submit">Log In</button>

            </form>
        </div>
    );
}

export default LoginForm;
