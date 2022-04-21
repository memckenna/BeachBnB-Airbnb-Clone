import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import './HomePage.css';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";

const BecomeAHost = ({ isLoaded }) => {
    const history = useHistory()

    const onClick = () => {
        history.push("/spot/new")
    }

    return (
        <div className='become-a-host-section'>
            <div className="hosting-section">
                <img className="hosting-image" src="images/HomePageImages/beach-hosting.jpeg"></img>
                <div className="hosting-text">Ready to host your beach home?</div>
                {/* <NavLink to="/spot/new"> */}
                    <button onClick={onClick} className='host-button' >Become A Host</button>
                {/* </NavLink> */}
            </div>
        </div>
    )
}

export default BecomeAHost;
