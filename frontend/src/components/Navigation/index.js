import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormPage';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
                {/* <NavLink activeClassName='active' to="/signup">Sign Up</NavLink> */}
            </>
        );
    }

    return (
        <nav className='nav-bar'>
            <ul>
                <li className='nav-links'>
                    <NavLink activeClassName='active' exact to="/">
                        <img className='logo' src='/images/beachbnb-logo.png' alt="BeachBnB logo" />
                    </NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
