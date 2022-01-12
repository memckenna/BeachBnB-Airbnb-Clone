import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './HomePage.css'
import TripInspiration from './TripInspiration';
import BecomeAHost from './BecomeAHost';
import SuggestedSpots from './SuggestedSpots';
import { getAllSpots } from '../../store/spotReducer';
import { NavLink, Route } from 'react-router-dom';


const SplashPage = () => {
    const dispatch = useDispatch()

    const showAllSpots = () => {
        dispatch(getAllSpots())
    }

    return (
        <div>
            <div id='splash-page'>
                <img className='splash-page-image' src='images/HomePageImages/photo-1615571022219-eb45cf7faa9d.jpeg' alt='Beach House'></img>
                <div id='splash-img-text'>Not sure where to beach? Perfect.</div>
                <NavLink to='/spots'>
                    <button className='flexible-button' >I'm Flexible</button>
                </NavLink>
            </div>
            <div>
                <TripInspiration />
            </div>
            <div>
                <BecomeAHost />
            </div>
            <div>
                <SuggestedSpots />
            </div>
        </div>
    )
}


export default SplashPage;
