import React from 'react';
import './HomePage.css'
import TripInspiration from './TripInspiration';


const SplashPage = () => {

    return (
        <div>
            <div id='splash-page'>
                <img className='splash-page-image' src='images/HomePageImages/photo-1615571022219-eb45cf7faa9d.jpeg' alt='Beach House'></img>
                <div id='splash-img-text'>Looking to share your beach? Perfect.</div>
                <button className='host-button' >Become a Host</button>
            </div>
            <div>
                <TripInspiration />
            </div>
        </div>
    )
}


export default SplashPage;
