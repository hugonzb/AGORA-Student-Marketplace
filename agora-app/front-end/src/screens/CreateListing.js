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
    const [,] = useState("");
    const [,] = useState("");
    const [,] = useState("");
    const [,] = useState("");
    const [,] = useState("");
    const [,] = useState("");


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
                    >
                    </input>
                </form>
            </div>
        </div>
    );
}

export default CreateListing;