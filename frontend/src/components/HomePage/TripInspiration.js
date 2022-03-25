import React from "react";
import { NavLink } from "react-router-dom";


const TripInspiration = () => {
    return (
        <div className="trip-inspo-container">
            <ul className="trip-inspo-cards-section">
                <div>
                    <h2 className="trip-section-text">Inspiration for your next beach getaway</h2>

                </div>
                <div className="trip-inspo-cards">
                    <NavLink className='trip-nav' to='/spots'>
                        <li>
                            <img src="images/HomePageImages/dreamy-beach.png" />
                            <div id="trip-img-1" className="image-content">Dreamy Beach Getaway</div>
                        </li>
                    </NavLink>
                    <NavLink className='trip-nav' to='/spots'>
                        <li>
                            <img src="images/HomePageImages/beach-mountains.png" />
                            <div id="trip-img-2" className="image-content">Exciting Beach Getaway</div>
                        </li>
                    </NavLink>
                    <NavLink className='trip-nav' to='/spots'>
                        <li>
                            <img src="images/HomePageImages/beach-water.png" />
                            <div id="trip-img-3" className="image-content">Quite Beach Getaway</div>
                        </li>
                    </NavLink>
                    <NavLink className='trip-nav' to='/spots'>
                        <li>
                            <img src="images/HomePageImages/beach-family.png" />
                            <div id="trip-img-4" className="image-content">Family Beach Getaway</div>
                        </li>
                    </NavLink>
                </div>
            </ul>
        </div>
    )
}

export default TripInspiration;
