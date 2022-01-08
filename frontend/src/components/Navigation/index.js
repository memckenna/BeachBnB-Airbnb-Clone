import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

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
                <NavLink activeClassName='active' to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <nav className='nav-bar'>
            <ul>
                <li className='nav-links'>
                    <NavLink activeClassName='active' exact to="/">
                        <img className='logo' src='/images/airbnb-logo-white-bg.png' alt="Airbnb logo" />
                    </NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
