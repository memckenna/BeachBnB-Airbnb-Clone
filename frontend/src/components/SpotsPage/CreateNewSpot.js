import React from "react";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './SpotsPage.css';

import { createNewSpot } from "../../store/spotReducer";

const CreateNewSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(e);

        const newSpot = {
            name,
            address,
            city,
            state,
            country,
            zipcode,
            price,
            image
        }
        const spot = await dispatch(createNewSpot(newSpot));
        if(spot) {
            history.pushState(`/spots/${spot.id}`)
        }
    }

    return (
        <div className="input-box">
            <h1>Create New Listing</h1>
            <div className="new-spot-form">
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                    name="name"
                />
                <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    placeholder="Address"
                    name="address"
                />
                <input
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    placeholder="City"
                    name="city"
                />
                <input
                    type="text"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                    placeholder="State"
                    name="state"
                />
                <input
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    placeholder="Country"
                    name="country"
                />
                <input
                    type="number"
                    onChange={(e) => setZipcode(e.target.value)}
                    value={zipcode}
                    placeholder="Zip Code"
                    name="zipcode"
                />
                <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    placeholder="Price"
                    name="price"
                />
                <input
                    type="url"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    placeholder="Image"
                    name="image"
                />
                <button type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default CreateNewSpot;
