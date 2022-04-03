import React, { useState, useEffect } from "react";
import { Route, NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import BookingsPage from '../Bookings/index';

import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user)

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
            <img className="profile-menu-lines" src="/images/thin_lines_menu_icon.png" />
            <i className="fas fa-user-circle"></i>
          </button>
          {showMenu && (
            <div className="profile-dropdown">
              {/* <div className="profile-user-info">
                <div className="profile-username">{user.username}</div>
                <div className="profile-email">{user.email}</div>
              </div> */}
              <div className="profile-user-trips">
                <div>
                  <NavLink className="profile-links-trips" to={`/bookings`}>Trips</NavLink>
                </div>
              </div>
              <div className="profile-user-hosting">
                <div className="host-experience">
                  <div>
                    <NavLink className="profile-links" to="/spot/new">Host an experience</NavLink>
                  </div>
                </div>
                <div className="host-manage-listing">
                  <NavLink className="profile-links" to={`/hosting`} >Manage listings</NavLink>
                </div>
              </div>
              <div className="logout">
                <div className="logout-button" onClick={logout}>Log out</div>
              </div>
            </div>
          )}
        </div>
      </ div>
    </>
  )
}


export default ProfileButton;
