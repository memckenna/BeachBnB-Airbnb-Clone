import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

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
        <div className='loginForm'>
            <h1 className='loginHeader'>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label className='loginContainer'>
                    {/* Welcome to Airbnb */}
                    <input
                        className='loginInputField'
                        type="text"
                        onChange={(e) => setCredential(e.target.value)}
                        value={credential}
                        placeholder='Username or Email'
                        required
                    />
                </label>
                <label className='loginContainer'>
                    <input
                        className='loginInputField'
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Password'
                        required
                    />
                </label>
                <button className='loginButton' type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LoginFormPage;
