import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createListing } from "../actions/listingActions";
import Axios from "axios";
import "../signup.css"; 

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
  const [image, setImage] = useState("/images/default.png");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [university, setUniversity] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("New");
  const [seller, setSeller] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerProfilePicture, setSellerProfilePicture] = useState("");
  // This should used to determine if the user has chosen a file to upload.
  const [uploading, setUploading] = useState(false);
  // This field will be used to show the upload confirm button.
  const [uploadButton, setUploadButton] = useState(true);


  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  //const [file, setFile] = useState(null);

  useEffect(() => {
    if (userInfo) {
      setSeller(userInfo.fname + " " + userInfo.sname);
      setUniversity(userInfo.university);
      setCity(userInfo.city);
      setSellerId(userInfo.studentid);
      setSellerEmail(userInfo.email);
      setSellerProfilePicture(userInfo.profilePicture);
    }
    return () => { };
  }, [userInfo]);


  /*
   */
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
  }


  /* This method sets the file var to whatever file is currently marked for upload
  in the upload file section of this page. It should be called whenever the filed upload
  field is updated by the user
  const uploadFileHandler = (e) => {
    file_name = e.target.files[0];
    setImage()
  }*/


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
        sellerEmail,
        sellerProfilePicture
      )
    );
    props.history.push("/");
  };

  return (
    
      <div className="wrapper">
        <div className="registration_form">
                   
                   <div className="titleText">
                   <span>
			            <h2>Create A Listing</h2> 
                   <b>Describe your item to get selling!</b> 
                   </span> 
                   </div>
           
            <br></br>
                <div className= "input_wrap">
                        <label className="upload-image">Upload Image</label>
       
                          {uploading && <div>Uploading...</div>}
                          { uploadButton ?
                            <input type="file" onChange={uploadFileHandler}></input>
                          : <div className="uploaded"> Uploaded listing image successfully </div>}
                </div>
                   
                <form className="form_wrap" onSubmit={submitHandler}>

                    <div className= "input_grp">
                        <div className= "input_wrap">
                            <label>Listing Name: </label>
                                  <input
                                    type="text"
                                    id="listingName"
                                    name="listingName"
                                    placeholder="Listing Name"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                  ></input>
                        </div>

                        <div className= "input_wrap">
                            <label>Product brand: </label>
                                <input
                                   type="text"
                                   id="brand"
                                   name="brand"
                                   placeholder="Product Brand"
                                   onChange={(e) => setBrand(e.target.value)}
                                 ></input>
                        </div>
                    </div>

                <div className= "input_grp">
                    <div className= "input_wrap">
                          <label>Listing Description: </label>
                              <textarea
                                className="textarea"
                                type="text"
                                id="listingDescription"
                                name="listingDescription"
                                placeholder="Your Description Here."
                                rows="3"
                                cols="500"
                                required
                                onChange={(e) => setDescription(e.target.value)}
                              ></textarea>
                    </div>
                   
                </div>
            
                <div className= "input_grp">
                    <div className= "input_wrap">
                      <div class="selectBox">
                          <label>Category: </label>
                              <select className="select-css" id="categories" onChange={(e) => setCategory(e.target.value)}>
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
                    </div>

                    <div className= "input_wrap">
                    <div class="selectBox">
                      <label>Condition: </label>
        
                          <select id="condition" onChange={(e) => setCondition(e.target.value)}>
                           
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                          </select>
                          </div> 
                    </div>
                </div>

                    <div className="input_grp">
                 <div className= "input_wrap">
                      <label>Price: </label>
                          <input
                            type="number"
                            step="0.01"
                            id="price"
                            name="price"
                            placeholder="$0.00"
                            required
                            onChange={(e) => setPrice(e.target.value)}
                          ></input>
                    </div>
                </div>      

                <div className="input_grp">
                    <div className="input_wrap">
                       <input type ="submit" value="Create Listing" className="submit_btn"></input>
                    </div>
                </div>

                </form>
              </div>
            </div>
          
  
    );
}

export default CreateListing;
