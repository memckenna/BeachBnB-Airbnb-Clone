import React from "react";
import { NavLink } from "react-router-dom";
import './HomePage.css';

const BecomeAHost = () => {
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
