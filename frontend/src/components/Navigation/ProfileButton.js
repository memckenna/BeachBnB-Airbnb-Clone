import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import BookingsPage from '../Bookings/index';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

    return (
        <>
            <div className="profile">
                <div className='profile-dropdown-container'>
                    <button className="profile-button" onClick={openMenu}>
                        <i className="fas fa-user-circle"></i>
                    </button>
                    {showMenu && (
                        <ul className="profile-dropdown">
                            <li className="profile-links">{user.username}</li>
                            <li className="profile-links">{user.email}</li>
                            <li>
                            <NavLink className="profile-links" to={`/bookings`}>Bookings</NavLink>
                            </li>
                            <li className="profile-links logout">
                                <button className="logout-button" onClick={logout}>Log Out</button>
                            </li>
                        </ul>
                    )}
                </div>
            </ div>
        </>
    )
}


export default ProfileButton;
