import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createListing } from "../actions/listingActions";
import { Link } from "react-router-dom";

function CreateListing(props) {
  /* 
        These fields will be used to get the data the user enters
        into the form into js variables that we can send to the backend
        which will then send it to the database.
    */
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Default Category"); //need to add all categories in the html will do this tomorrow.
  const [price, setPrice] = useState(""); //unsure about this for now
  const [location, setLocation] = useState("");
  const [university, setUniversity] = useState("University of Auckland");
  const [brand, setBrand] = useState("");
  const [seller, setSeller] = useState("this needs to be updated"); //need to update this var to be the account ID logged in.
  const [deliveryoption, setDeliveryoption] = useState("");

  //const userCreateListing = useSelector((state) => state.userCreateListing);
  //const {loading, userInfo, error} = userCreateListing;

  const dispatch = useDispatch();

  // currently just need to figure out how to dispatch the information when submit button is clicked to the post
  // in listingRoute. I believe I have done everything already needed there.
  /* 
  const listingSave = useSelector((state) => state.listingSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = listingSave;
  */

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createListing(name, description, image, category, price,
      location, university, brand, seller, deliveryoption));
    props.history.push("/");
  }

  useEffect(() => {
    return () => {};
  })

  return (
    <div className="createListingContainer">
      <div className="innerCreateListingContainer">
        <h2>Create a Listing</h2>
        <form className="createListingForm" onSubmit={submitHandler}>
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
            required
            onChange={(e) => setPrice(e.target.value)}
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
            required
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
