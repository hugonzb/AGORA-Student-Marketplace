import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createListing } from "../actions/listingActions";
import Axios from "axios";

function CreateListing(props) {
  /* 
        These fields will be used to get the data the user enters
        into the form into js variables that we can send to the backend
        which will then send it to the database.
    */
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // This sets the image file path to initially be the default image in /images/default.png
  // Will be updated if user chooses to select an image however.
  const [image, setImage] = useState("/images/default.png");
  const [category, setCategory] = useState("Antiques");
  const [price, setPrice] = useState(""); 
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("New");
  const [seller, setSeller] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [deliveryoption, setDeliveryoption] = useState("");
  // This should used to determine if the user has chosen a file to upload.
  const [uploading, setUploading] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  let file = null;
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

  useEffect(() => {
    if (userInfo) {
      setSeller(userInfo.fname + " " + userInfo.sname);
      setUniversity(userInfo.university);
      setCity(userInfo.city);
      setSellerId(userInfo.studentid);
    }
    return () => {};
  }, [userInfo]);


  /*
   */
  const uploadFile = () => {
    const bodyFormData = new FormData();

    bodyFormData.append("image", file);
    // Now we are ready to send an AJAX request with Axios

    // This line will produce the div that tells the user their file is uploading
    setUploading(true);
    Axios.post("/api/listings/uploadimage", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setImage(response.data);
        // This line will remove the "uploading..." div
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  }


  /* This method sets the file var to whatever file is currently marked for upload
  in the upload file section of this page. It should be called whenever the filed upload
  field is updated by the user
  */
  const uploadFileHandler = (e) => {
    file = e.target.files[0];
  }


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createListing(
        name,
        description,
        image,
        category,
        price,
        city,
        university,
        brand,
        condition,
        seller,
        sellerId,
        deliveryoption
      )
    );
    props.history.push("/");
  };

  useEffect(() => {
    return () => {};
  });

  return (
    <div className="sign-up-container">
      <div className="createnewAccountContainer">
        <h2>Hello {userInfo.fname}! Create a new Listing: </h2>
        <form className="create-new-account-form" onSubmit={submitHandler}>
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
          <label>Upload Image</label>
          <input
            type="text"
            name="image"
            value={image}
            id="image"
            onChange = {(e) => setImage(e.target.value)}
            ></input>
          <input type="file" onChange={uploadFileHandler}></input>
          {uploading && <div>Uploading...</div>}
          <label>Category: </label>
          <select id="categories" onChange={(e) => setCategory(e.target.value)}>
            <option value="Antiques">Antiques</option>
            <option value="University Textbooks">University Textbooks</option>
            <option value="Books">Books</option>
            <option value="Clothing">Clothing</option>
            <option value="Sports Clothing">Sports Clothing</option>
            <option value="Shoes">Shoes</option>
            <option value="Jewellery and Watches">Jewellery and Watches</option>
            <option value="Accessories">Accessories</option>
            <option value="Computers">Computers</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Electronics">Electronics</option>
            <option value="Gaming consoles">Gaming consoles</option>
            <option value="Console and PC games">Console and PC games</option>
            <option value="Health and Beauty">Health and Beauty</option>
            <option value="Furniture">Furniture</option>
            <option value="Lamps and Lighting">Lamps and Lighting</option>
            <option value="Toys">Toys</option>
            <option value="Sports Equipments">Sports Equipments</option>
          </select>

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
          <label>Product brand: </label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="brand"
            onChange={(e) => setBrand(e.target.value)}
          ></input>
          <label>Condition: </label>
          <select id="condition" onChange={(e) => setCondition(e.target.value)}>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
          <label>Delivery </label>
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
          <button type="submit" value="Submit">
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateListing;
