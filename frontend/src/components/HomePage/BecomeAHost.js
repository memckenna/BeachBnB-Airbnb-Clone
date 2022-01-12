import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import './HomePage.css';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";

const BecomeAHost = ({ isLoaded }) => {
    // const sessionUser = useSelector(state => state.session.user);

    // let becomeAHostButton;
    // if(sessionUser) {
    //     becomeAHostButton = (
    //         <NavLink to="/spot/new">
    //                 <button className='host-button' >Become A Host</button>
    //         </NavLink>
    //     )
    // } else {
    //     becomeAHostButton = (
    //         <>
    //             <LoginFormModal />
    //             <SignupFormModal />
    //         </>
    //     );
    // }

    return (
        <div>
            <div className="hosting-section">
                <img className="hosting-image" src="images/HomePageImages/beach-hosting.jpeg"></img>
                <div className="hosting-text">Ready to host your beach home?</div>
                <NavLink to="/spot/new">
                    <button className='host-button' >Become A Host</button>
                </NavLink>
            </div>
        </div>
    )
}

export default BecomeAHost;
