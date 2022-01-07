import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';



const ProfileButton = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <button>
                <i className="fas fa-address-card"></i>
            </button>
        </>
    )
}


export default ProfileButton;
