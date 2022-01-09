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
            </>
        );
    }

    return (
        <header id='header'>
            <nav className='nav-bar'>
                    <ul>
                        <li className='nav-links'>
                            <NavLink activeClassName='active' exact to="/">
                                <img className='logo' src='/images/beachbnb-logo.png' alt="BeachBnB logo" />
                            </NavLink>
                            <li>{isLoaded && sessionLinks}</li>
                            {/* {isLoaded && sessionLinks} */}
                        </li>
                    </ul>
            </nav>

        </header>
    );
}

export default Navigation;
