import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import SignupFormModal from '../SignupFormPage';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton isLoaded={isLoaded} user={sessionUser} />
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
                <div className='nav-links'>
                    <div className='logo-div'>
                        <NavLink activeClassName='active' exact to="/">
                            <img className='logo' src='/images/beachbnb-color-top-trans-logo.png' alt="BeachBnB logo" />
                        </NavLink>
                    </div>
                    <div className='places-host-div'>
                        <NavLink className="places-to-stay" to={'/spots'}>Places to stay</NavLink>
                        <NavLink className="become-a-host" to="/spot/new">Become A Host</NavLink>
                    </div>
                    <div className='right-nav-div'>
                        <div className='login-signup-button'>{isLoaded && sessionLinks}</div>
                        {/* {isLoaded && sessionLinks} */}
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Navigation;
