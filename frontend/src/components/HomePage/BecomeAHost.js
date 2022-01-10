import React from "react";
import './HomePage.css';

const BecomeAHost = () => {
    return (
        <div>
            <div className="hosting-section">
                <img className="hosting-image" src="images/HomePageImages/beach-hosting.jpeg"></img>
                <div className="hosting-text">Ready to host your beach home?</div>
                <button className='host-button' >Become A Host</button>
            </div>
        </div>
    )
}

export default BecomeAHost;
