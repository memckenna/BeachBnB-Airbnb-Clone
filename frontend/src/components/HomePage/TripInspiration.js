import React from "react";
import { NavLink } from "react-router-dom";


const TripInspiration = () => {
    return (
        <div>
            <h2 className="trip-section-text">Inspiration for your next beach getaway</h2>
            <ul className="trip-inspo-cards">
                <li>
                    <img src="images/HomePageImages/dreamy-beach.png" />
                    <div className="image-content">Dreamy Beach Getaway</div>
                </li>
                <li>
                    <img src="images/HomePageImages/beach-mountains.png" />
                    <div className="image-content">Exciting Beach Getaway</div>
                </li>
                <li>
                    <img src="images/HomePageImages/beach-water.png" />
                    <div className="image-content">Quite Beach Getaway</div>
                </li>
                <li>
                    <img src="images/HomePageImages/beach-family.png" />
                    <div className="image-content">Family Beach Getaway</div>
                </li>

            </ul>
        </div>
    )
}

export default TripInspiration;
