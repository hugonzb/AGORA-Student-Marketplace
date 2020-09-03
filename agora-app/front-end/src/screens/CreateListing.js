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
  const [university, setUniversity] = useState("University of Auckland");
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [seller, setSeller] = useState("update this with seller name"); //need to update this var

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, userInfo, error } = userSignup;

  return (
    <div className="createListingContainer">
      <h2>Create a Listing</h2>
      <div className="innerCreateListingContainer">
        <form className="createListingForm">
          <label>Listing Name: </label>
          <input
            type="text"
            id="listingName"
            name="listingName"
            placeholder="Listing Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br></br>
          <label>Listing Description: </label>
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
          <label>Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="$0.00"
          ></input>
          <br></br>

          <label> Location: </label>
          <input
            type="text"
            id="location "
            name="location "
            placeholder="location "
            required
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br></br>

          <label for="school">University: </label>
          <select
            id="school"
            name="school"
            placeholder="Select University"
            onChange={(e) => setUniversity(e.target.value)}
          >
            <option value="University of Auckland">
              University of Auckland
            </option>
            <option value="Auckland University of Technology (AUT)">
              Auckland University of Technology (AUT)
            </option>
            <option value="University of Waikato">University of Waikato</option>
            <option value="Massey University">Massey University</option>
            <option value="Victoria University of Wellington">
              Victoria University of Wellington
            </option>
            <option value="University of Canterbury">
              University of Canterbury
            </option>
            <option value="Lincoln University">Lincoln University</option>
            <option value="University of Otago">University of Otago</option>
          </select>
          <br></br>

          <label>Product brand: </label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="brand"
            onChange={(e) => setBrand(e.target.value)}
          ></input>
          <br></br>

          <input
            type="radio"
            id="pickup"
            name="deliveryoptions"
            value="pickup"
            required
            onChange={(e) => setDeliveryoption(e.target.value)}
          ></input>
          <label>Pick-Up </label>
          <input
            type="radio"
            id="delivery"
            name="deliveryoptions"
            value="delivery"
            required
            onChange={(e) => setDeliveryoption(e.target.value)}
          ></input>
          <label>Delivery </label>
          <button type="submit" value="Submit">
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateListing;
