import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../actions/userActions";
import { Link } from "react-router-dom";

function CreateListing(props) {

    /* 
        These fields will be used to get the data the user enters
        into the form into js variables that we can send to the backend
        which will then send it to the database.
    */
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [deliveryoption, setDeliveryoption] = useState("");
    const userSignup = useSelector((state) => state.userSignup);
    const { loading, userInfo, error } = userSignup;



    return (
        <div className="createListingContainer">
            <h2>Create a Listing</h2>
            <div className="innerCreateListingContainer">
                <form className="createListingForm">
                    <label>Listing Name</label>
                    <input
                        type="text"
                        id="listingName"
                        name="listingName"
                        placeholder="Listing Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                    <br></br>
                    <label>Listing Description</label>
                    <textarea
                        type="text"
                        id="listingDescription"
                        name="listingDescription"
                        placeholder="Your Description Here."
                        rows="5"
                        cols="40"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <br></br>
                    <input
                        type="radio"
                        id="pickup"
                        name="deliveryoptions"
                        value="pickup"
                        required
                        onChange={(e) => setDeliveryoption(e.target.value)}
                    ></input>
                    <label>Pick-Up</label>
                    <input
                        type="radio"
                        id="delivery"
                        name="deliveryoptions"
                        value="delivery"
                        required
                        onChange={(e) => setDeliveryoption(e.target.value)}
                    ></input>
                    <label>Delivery</label>
                    <button type="submit" value="Submit">
                        Create Listing
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateListing;