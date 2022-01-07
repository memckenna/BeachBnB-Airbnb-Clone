import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';


const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
          setErrors([]);
          return dispatch(sessionActions.signup({ email, username, password }))
            .catch(async (res) => {
              const data = await res.json();
              if (data && data.errors) setErrors(data.errors);
            });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div>
            <div className="signupContainer">
                {/* <header>Sign Up</header> */}
                <div className="signupForm">
                    <h2>Welcome to Airbnb</h2>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                        </ul>
                        <label>
                            <input
                                className="signUpInputField"
                                type='text'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                                required
                            />
                        </label>
                        <label>
                            <input
                                className="signUpInputField"
                                type='text'
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                placeholder="Username"
                                required
                            />
                        </label>
                        <label>
                            <input
                                className="signUpInputField"
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                                required
                            />
                        </label>
                        <label>
                            <input
                                className="signUpInputField"
                                type='password'
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                required
                            />
                        </label>
                        <button className="signupButton" type="submit">Sign Up</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default SignupFormPage;
