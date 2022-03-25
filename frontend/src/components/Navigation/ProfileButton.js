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
                        <ul className="profile-dropdown">
                            <li className="profile-links">{user.username}</li>
                            <li className="profile-links">{user.email}</li>
                            {/* <li className="profile-links">
                              <div className="profile-links">{isLoaded && sessionLinks}</div>
                            </li> */}
                            <li>
                            <NavLink className="profile-links" to={`/bookings`}>Bookings</NavLink>
                            </li>
                            <li className="profile-links logout">
                                <button className="logout-button" onClick={logout}>Log Out</button>
                            </li>
                            {/* {!sessionUser ?
                                <li className="profile-links logout">
                                  <LoginFormModal />
                                  <SignupFormModal />
                                </li> :
                                <li className="profile-links logout">
                                      <button className="logout-button" onClick={logout}>Log Out</button>
                                </li>
                            } */}
                            {/* {sessionUser ?
                              <li className="profile-links logout">
                                  <button className="logout-button" onClick={logout}>Log Out</button>
                              </li> :
                              <li className="profile-links logout">
                                <LoginFormModal />
                                <SignupFormModal />

                              </li>
                            } */}
                        </ul>
                    )}
                </div>
            </ div>
        </>
    )
}


export default ProfileButton;
