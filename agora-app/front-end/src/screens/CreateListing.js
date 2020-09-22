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
  const [category, setCategory] = useState("Antiques");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("New");
  const [seller, setSeller] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  // This should used to determine if the user has chosen a file to upload.
  const [uploading, setUploading] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  let filename = "";

  useEffect(() => {
    if (userInfo) {
      setSeller(userInfo.fname + " " + userInfo.sname);
      setUniversity(userInfo.university);
      setCity(userInfo.city);
      setSellerId(userInfo.studentid);
      setSellerEmail(userInfo.email);
    }
    return () => { };
  }, [userInfo]);


  /*
   */
  const uploadFile = () => {
    console.log("calling uploadFile()");
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
        filename = response.data;
        setImage(filename);
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
  Currently it is not used.
  const uploadFileHandler = (e) => {
    file = e.target.files[0];
  }
*/

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(image);
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
        sellerEmail
      )
    );
    //props.history.push("/");
  };

  useEffect(() => {
    return () => { };
  });

  const setFields = (e) => {
    e.preventDefault();
  }

  return (
    <div className="sign-up-container">
      <div className="createnewAccountContainer">
        <h2>Hello {userInfo.fname}! Create a new Listing: </h2>
        <input type="file" onInput={setFields} onChange={(e) => setFile(e.target.files[0])}></input>
          {uploading && <div>Uploading...</div>}
          <button onClick={uploadFile}>
            Confirm upload
          </button>
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
            onInput={setFields}
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
          <label>Upload Image</label>
          <button type="submit" value="Submit">
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateListing;
