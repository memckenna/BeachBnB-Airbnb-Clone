import React from "react";
import { useState, useEffect } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getSpotById } from '../../store/spotReducer';


const SuggestedSpots = () => {
    // const { id } = useParams();
    // const dispatch = useDispatch();

    return (
        <div>
            <h2>Beach Stay Suggestions</h2>


            <ul className="trip-inspo-cards">
                {/* <NavLink className='trip-nav' to={`/spots/${id}`}>
                    <li>
                        <img src="images/HomePageImages/beach-suggestions-1.webp" />
                    </li>
                </NavLink>
                <NavLink className='trip-nav' to={`/spots/${id}`}>
                    <li>
                        <img src="images/HomePageImages/beach-suggestions-2.jpeg" />

                    </li>
                </NavLink>
                <NavLink className='trip-nav' to={`/spots/${id}`}>
                    <li>
                        <img src="images/HomePageImages/beach-suggestions-3.jpeg" />

                    </li>
                </NavLink>
                <NavLink className='trip-nav' to={`/spots/${id}`}>
                    <li>
                        <img src="images/HomePageImages/beach-suggestions-4.jpeg" />

                    </li>
                </NavLink> */}
            </ul>
        </div>
    )
}

export default SuggestedSpots;
