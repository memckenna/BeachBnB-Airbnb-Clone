import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import BookingsPage from '../Bookings/index';

import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
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

  // let sessionLinks;
  // if (!user) {
  //     sessionLinks = (
  //         // <ProfileButton user={sessionUser} />
  //         <>
  //             <LoginFormModal />
  //             <SignupFormModal />
  //         </>
  //     );
  // }


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
              <div className="profile-user-info">
                <div className="profile-username">{user.username}</div>
                <div className="profile-email">{user.email}</div>
              </div>
              {/* <li className="profile-links">
                              <div className="profile-links">{isLoaded && sessionLinks}</div>
                            </li> */}
              <div className="profile-user-trips">
                <NavLink className="profile-links" to={`/bookings`}>Trips</NavLink>
              </div>
              <div className="profile-user-hosting">
                <NavLink className="profile-links" to="/spot/new">Host an experience</NavLink>
              </div>
              <div className="logout">
                <button className="logout-button" onClick={logout}>Log Out</button>
              </div>
              {/* {!sessionUser ?
                                <li className="profile-links logout">
                                  <LoginFormModal />
                                  <SignupFormModal />
                                </li> :
                                <li className="profile-links logout">
                                      <button className="logout-button" onClick={logout}>Log Out</button>
                                </li>
                            } */}
            </div>
          )}
        </div>
      </ div>
    </>
  )
}


export default ProfileButton;
