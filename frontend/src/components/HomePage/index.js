import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './HomePage.css'
import TripInspiration from './TripInspiration';
import BecomeAHost from './BecomeAHost';
import SuggestedSpots from './SuggestedSpots';
import { getAllSpots } from '../../store/spotReducer';
import { NavLink, Route } from 'react-router-dom';


const SplashPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const showAllSpots = () => {
        dispatch(getAllSpots())
        history.push("/spots")
    }

    return (
        <div className='splash-container'>
            <div id='splash-page'>
                <img className='splash-page-image' src='images/HomePageImages/photo-1615571022219-eb45cf7faa9d.jpeg' alt='Beach House'></img>
                <div id='splash-img-text'>Not sure where to beach? Perfect.</div>
                {/* <NavLink to='/spots'> */}
                <button onClick={showAllSpots} className='flexible-button' >I'm Flexible</button>
                {/* </NavLink> */}
            </div>
            <div className='splash-page-trips'>
                <TripInspiration />
            </div>
            <div >
                <BecomeAHost />
            </div>
            <div>
                <SuggestedSpots />
            </div>
        </div>
    )
}


export default SplashPage;
