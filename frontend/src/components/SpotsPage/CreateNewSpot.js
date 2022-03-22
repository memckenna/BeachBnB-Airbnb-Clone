import React from "react";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './SpotsPage.css';

import { createNewSpot } from "../../store/spotReducer";

import LoginFormModal from '../LoginFormModal';


const CreateNewSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    if(!sessionUser) {
        window.location.pathname = "/"
        window.alert("You must be signed in to perform this action")
        
        // setTimeout(() => {
        //     <LoginFormModal />
        //     // window.location.reload(true);
        // }, 2000);
        // return
     }

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [price, setPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("")
    const [baths, setBaths] = useState("")
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        const newSpot = {
            name,
            address,
            city,
            state,
            country,
            zipcode,
            price,
            bedrooms,
            baths,
            image,
        }
        const spot = await dispatch(createNewSpot(newSpot));
        if(spot) {
            history.push(`/spots/${spot.id}`)
        }
    }

    useEffect(() => {
        const validationErrors = [];

        if(name.length < 4) validationErrors.push("Please enter the name of your home");
        if(address.length < 10) validationErrors.push("Please enter the address of your home");
        if(city.length < 3) validationErrors.push("Please enter the city of your home");
        if(state.length < 3) validationErrors.push("Please enter the state of your home");
        if(country.length < 3) validationErrors.push("Please enter the country of your home");
        if(zipcode.length === 0) validationErrors.push("Please provide a zip code");
        if(bedrooms <= 0) validationErrors.push("Please provide the amount of bedrooms or beds");
        if(baths <= 0 ) validationErrors.push("Please provide the amount of bathrooms");
        if(price <= 0) validationErrors.push("Please provide the nightly rate for your home");
        if(!image.startsWith("https://")) validationErrors.push("Please provide the full image address");

        setErrors(validationErrors)
    }, [name, address, city, state, country, zipcode, price, bedrooms, baths, image]);

    return (
        <div className="input-form-div">
            <div className="new-spot-form">
                <h1 className="form-header">Create New Listing</h1>
                <ul className="errors">
                    <p className="creds">Please provide the following credentials:</p>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Home Name"
                        name="name"
                        required
                    />
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        placeholder="Address"
                        name="address"
                        required
                    />
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        placeholder="City"
                        name="city"
                        required
                    />
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        placeholder="State"
                        name="state"
                        required
                    />
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        placeholder="Country"
                        name="country"
                        required
                    />
                    <input
                        className="input-box"
                        type="number"
                        onChange={(e) => setZipcode(e.target.value)}
                        value={zipcode}
                        placeholder="Zip Code"
                        name="zipcode"
                        required
                    />
                    <input
                        className="input-box"
                        type="number"
                        onChange={(e) => setBedrooms(e.target.value)}
                        value={bedrooms}
                        placeholder="Bedrooms"
                        name="bedrooms"
                        required
                    />
                    <input
                        className="input-box"
                        type="number"
                        onChange={(e) => setBaths(e.target.value)}
                        value={baths}
                        placeholder="Bathrooms"
                        name="bathrooms"
                        required
                    />
                    <input
                        className="input-box"
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        placeholder="Price"
                        name="price"
                        required
                    />
                    <input
                        className="input-box"
                        type="url"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        placeholder="Image"
                        name="image"
                        required
                    />
                    <button className="new-spot-button" type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default CreateNewSpot;
