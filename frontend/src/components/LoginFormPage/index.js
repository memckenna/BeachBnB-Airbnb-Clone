import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Username or Email
                    <input
                        type="text"
                        onChange={(e) => setCredential(e.target.value)}
                        value={credential}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </label>
             <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LoginFormPage;
