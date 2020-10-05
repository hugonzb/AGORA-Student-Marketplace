import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { detailListing, listingUpdate } from "../actions/listingActions";

function UpdateListing(props) {
  //get user details
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  //get the current listings details
  const listingDetails = useSelector((state) => state.listingDetails);
  const { listing, loading, error } = listingDetails;

  const [_id, setListingID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // This sets the image file path to initially be the default image in /images/default.png
  // Will be updated if user chooses to select an image however.
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [seller, setSeller] = useState("");
  const [sellerId, setSellerId] = useState("");
  // This should used to determine if the user has chosen a file to upload.
  const [uploading, setUploading] = useState(false);
  const [uploadButton, setUploadButton] = useState(true);

  const dispatch = useDispatch();

  // gets the users details
  useEffect(() => {
    if (userInfo) {
      setSeller(userInfo.fname + " " + userInfo.sname);
      setUniversity(userInfo.university);
      setCity(userInfo.city);
      setSellerId(userInfo.studentid);
    }
    dispatch(detailListing(props.match.params.id));
    // eslint-disable-next-line
    if (loading == false) {
      setName(listing.name);
      setDescription(listing.description);
      setBrand(listing.brand);
      setCondition(listing.condition);
      setCategory(listing.category);
      setPrice(listing.price);
      setListingID(listing._id);
      setImage(listing.image);
    }
    return () => {};
    // eslint-disable-next-line
  }, [userInfo]);

  const uploadFileHandler = (e) => {
    // Make upload field disappear
    setUploadButton(false);
    console.log("calling uploadFile()");
    const file = e.target.files[0];
    const bodyFormData = new FormData();

    bodyFormData.append("image", file);
    // Now we are ready to send an AJAX request with Axios

    // This line will produce the div that tells the user their file is uploading
    setUploading(true);
    Axios.post("/api/fileUpload/uploadimage", bodyFormData, {
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
        console.log("Caught error while uploading: " + err);
        setUploading(false);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(image);
    dispatch(
      listingUpdate(
        _id,
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
        sellerId
      )
    );
    alert("Successfully updated listing");
    props.history.push("/listing/" + listing._id);
  };

  return loading ? (
    <div className="loading">Loading listing ...</div>
  ) : error ? (
    <div className="error">
      {" "}
      {error} - Make sure you are running the server to fetch data{" "}
    </div>
  ) : (
    <div className="wrapper">
      <div className="registration_form">
        <div className="form_header">
          <h2>Hello {userInfo.fname}! update your listing: </h2>
          <br></br>
        </div>
        <label>Upload Image</label>
        {uploading && <div>Uploading...</div>}
        {uploadButton ? (
          <div>
        
            <div className="listing-image">
              <img
                className="listing-image"
                src={listing.image}
                alt="listing"
              ></img>
            </div>
            <input type="file" onChange={uploadFileHandler}></input>
          </div>
        ) : (
          <div> Uploaded image successfully </div>
        )}

        <form className="form_wrap" onSubmit={submitHandler}>
         
         <div className="input_grp">
            <div className="input_wrap">
              <label>Listing Name: </label>
              <input
                type="text"
                id="listingName"
                name="listingName"
                defaultValue={listing.name}
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div className="input_wrap"> 
                <label>Product brand: </label>
                <input
                type="text"
                id="brand"
                name="brand"
                defaultValue={listing.brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
          </div>
          </div> 
          
          <div className="input_grp">


            <div className="input_wrap">
              <label>Listing Description: </label>
              <textarea
                type="text"
                id="listingDescription"
                name="listingDescription"
                defaultValue={listing.description}
                rows="5"
                cols="40"
                required
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="input_grp">
          <div className="input_wrap">
          <label>Category: </label>
          <select
            id="categories"
            defaultValue={listing.category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
          </div> 


          <div className= "input_wrap">
          <label>Condition: </label>
          <select
            id="condition"
            defaultValue={listing.condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
         
          </div> 
          </div> 

          <div className= "input_grp"> 
          <div className= "input_wrap"> 
          <br></br>
          <label>Price: </label>
          <input
            type="number"
            step="0.01"
            id="price"
            name="price"
            defaultValue={listing.price}
            required
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          </div> 
          </div> 

          <div className="input_grp"> 
          <div className="input_wrap">
           <button type="submit" value="Submit">
            Update Listing
          </button>
          </div>
          </div> 

          <br></br>
          
          
        </form>
      </div>
    </div>
  );
}

export default UpdateListing;
