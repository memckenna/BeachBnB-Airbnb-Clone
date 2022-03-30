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

    if (!sessionUser) {
        // window.location.pathname = "/"
        history.push("/")
        window.alert("You must be signed in to perform this action")
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
    // const [imageLoading, setImageLoading] = useState(false);
    // const [photoPrev, setPhotoPrev] = useState('#')
    // const [photoClass, setPhotoClass] = useState('photo-hidden')
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


        const validationErrors = [];
        if (!name) validationErrors.push("Name cannot be left blank");
        if (name.length < 4) validationErrors.push("Name must be between 5 and 100 characters");

        if (!address) validationErrors.push("Address cannot be left blank");
        if (address.length < 10) validationErrors.push("Address must be between 5 and 255 characters");

        if (!city) validationErrors.push("City cannot be left blank");
        if (city.length < 3) validationErrors.push("City must be between 5 and 255 characters");

        if (!state) validationErrors.push("State cannot be left blank");
        if (state.length < 3) validationErrors.push("State must be between 5 and 255 characters");

        if (!country) validationErrors.push("Country cannot be left blank");
        if (country.length < 3) validationErrors.push("Country must be between 5 and 255 characters");

        if (!zipcode) validationErrors.push("Zipcode cannot be left blank");
        if (zipcode.length < 5) validationErrors.push("Zipcode must be between 2 and 50 characters");

        if (!bedrooms) validationErrors.push("Bedrooms cannot be left blank");
        if (bedrooms <= 0) validationErrors.push("Please provide the amount of bedrooms or beds");

        if (!baths) validationErrors.push("Baths cannot be left blank");
        if (baths <= 0) validationErrors.push("Please provide the amount of bathrooms");

        if (!price) validationErrors.push("Price cannot be left blank");
        if (price <= 0) validationErrors.push("Please provide the nightly rate for your home");

        if (!image) validationErrors.push("Image cannot be left blank");
        if (!image.startsWith("https://")) validationErrors.push("Image URL must be between 5 and 255 characters");

        setErrors(validationErrors)

        if (!validationErrors.length) {
            const spot = await dispatch(createNewSpot(newSpot));
            history.push(`/spots/${spot.id}`)
        }
    }

    return (
        <div className="input-form-div">
            <div className="new-spot-form">
                <h1 className="form-header">Create New Listing</h1>
                <ul className="errors">
                    {errors.length > 0 &&
                        errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                </ul>
                <h2>Create your listing</h2>
                <form className="create-new-listing-form" onSubmit={handleSubmit}>
                    <label className='top-edit-labels'>home name</label>
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="Home Name"
                        name="name"
                        // validationErrors={() => setErrors(validationErrors)}
                        required
                    />
                    <label className='edit-labels'>address</label>
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        placeholder="Address"
                        name="address"
                        required
                    />
                    <label className='edit-labels'>city</label>
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        placeholder="City"
                        name="city"
                        required
                    />
                    <label className='edit-labels'>state</label>
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        placeholder="State"
                        name="state"
                        required
                    />
                    <label className='edit-labels'>country</label>
                    <input
                        className="input-box"
                        type="text"
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        placeholder="Country"
                        name="country"
                        required
                    />
                    <label className='edit-labels'>zipcode</label>
                    <input
                        className="input-box"
                        type="number"
                        onChange={(e) => setZipcode(e.target.value)}
                        value={zipcode}
                        placeholder="Zip Code"
                        name="zipcode"
                        required
                    />
                    <label className='edit-labels'>bedrooms</label>
                    <input
                        className="input-box"
                        type="number"
                        onChange={(e) => setBedrooms(e.target.value)}
                        value={bedrooms}
                        placeholder="Bedrooms"
                        name="bedrooms"
                        required
                    />
                    <label className='edit-labels'>baths</label>
                    <input
                        className="input-box"
                        type="number"
                        onChange={(e) => setBaths(e.target.value)}
                        value={baths}
                        placeholder="Bathrooms"
                        name="bathrooms"
                        required
                    />
                    <label className='edit-labels'>listing price</label>
                    <input
                        className="input-box"
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        placeholder="Price"
                        name="price"
                        required
                    />
                    <label className='edit-labels'>photo url</label>
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
