import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateASpot } from '../../store/spotReducer';

const EditSpotForm = () => {

    const { id } = useParams();
    const spotDetails = useSelector(state => state.spotState.listings[id])
    console.log("SPOT DETAILS", spotDetails)
    // console.log("PLEASE WORK", spot)
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState(spotDetails.name);
    const [address, setAddress] = useState(spotDetails.address);
    const [city, setCity] = useState(spotDetails.city);
    const [state, setState] = useState(spotDetails.state);
    const [country, setCountry] = useState(spotDetails.country);
    const [zipcode, setZipcode] = useState(spotDetails.zipcode);
    const [price, setPrice] = useState(spotDetails.price);
    const [bedrooms, setBedrooms] = useState(spotDetails.bedrooms)
    const [baths, setBaths] = useState(spotDetails.baths)
    const [image, setImage] = useState(spotDetails.Images[0].url);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        const updatedSpot = {
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
       const spotUpdated = await dispatch(updateASpot(updatedSpot));
       if(spotUpdated) {
            history.push(`/spots/${spotUpdated.id}`)
       }
    }

    useEffect(() => {
        const validationErrors = [];

        if(name.length < 4) validationErrors.push("Name must be 4 or more characters");
        if(address.length < 10) validationErrors.push("Address must be 10 or more characters");
        if(city.length < 3) validationErrors.push("City must be 3 or more characters");
        if(state.length < 3) validationErrors.push("State must be 3 or more characters");
        if(country.length < 3) validationErrors.push("Country must be 3 or more characters");
        if(zipcode.length === 0) validationErrors.push("Please provide a zip code");
        if(bedrooms === 0) validationErrors.push("Please provide the amount of bedrooms or beds");
        if(baths === 0 ) validationErrors.push("Please provide the amount of bathrooms");
        if(price === 0) validationErrors.push("Please provide the price that you would like to list you home for");
        if(!image.startsWith("https://")) validationErrors.push("Please provide the full image address");

        setErrors(validationErrors)
    }, [name, address, city, state, country, zipcode, price, bedrooms, baths, image]);


    return (
        <div className="input-form-div">
            <div className="new-spot-form">
                <h1 className="form-header">Edit Listing</h1>
                <ul className="errors">
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
                    />
                    <button className="new-spot-button" type="submit">Update Listing</button>
                    {/* <button type="button" onClick={handleCancelClick}>Cancel</button> */}
                </form>

            </div>
        </div>
    )
}

export default EditSpotForm;
