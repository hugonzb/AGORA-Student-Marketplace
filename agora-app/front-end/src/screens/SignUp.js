import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../actions/userActions";
import { Link } from "react-router-dom";
import "../signup.css";
import { removeUser } from "../actions/userActions";
import agoralogo from "../images/agoralogo.png";
import Axios from "axios";


function SignUp(props) {
  const [fname, setFname] = useState("");
  const [studentid, setStudentid] = useState("");
  const [sname, setSname] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("Male");
  const [university, setUniversity] = useState("University of Auckland");
  const [street_address, setStreet] = useState("");
  const [city, setCity] = useState("Dunedin");
  const [postcode, setPostcode] = useState("");
  const [profilePicture, setProfilePicture] = useState("/profilePictures/defaultprofileicon.jpg");
  const [upLoading, setUpLoading] = useState(false);
  const userSignup = useSelector((state) => state.userSignup);
  const { loading, userInfo, error } = userSignup;
  const [message, setMessage] = useState('');
  // This field will determine if the upload profile picture button is available
  // for the user to press or not.
  const [uploadButton, setUploadButton] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/account/signin");
      alert("You have successfully created an account");
    }
    dispatch(removeUser());
    return () => { };
    // eslint-disable-next-line
  }, [userInfo]);


  const uploadFileHandler = (e) => {
    setUploadButton(false);
    const file = e.target.files[0];
    const bodyFormData = new FormData();

    bodyFormData.append('image', file);
    // Now we are ready to send an AJAX request with Axios

    // This line will produce the div that tells the user their file is uploading
    setUpLoading(true);
    Axios.post("/api/users/uploadProfilePicture", bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
      setProfilePicture(response.data);
      // This line will remove the "uploading..." div
      setUpLoading(false);
    }).catch(err => {
      console.log(err);
      setUpLoading(false);
    });
  }

  /* This handler will run when the user clicks on the create account button */
  const submitHandler = (e) => {
    e.preventDefault();
    if(password === rePassword){
      dispatch(
        signUp(
          studentid,
          fname,
          sname,
          password,
          email,
          region,
          gender,
          university,
          street_address,
          city,
          postcode, 
          profilePicture
        )
      );
    } else {
      setMessage("Passwords do not match");
    }
  };
 
  return (
    <div className="wrapper">
        <div className="registration_form">
            <div className="form-heading">
                   <img src={agoralogo} 
                   className="sign-up-logo" alt=""/>
               
                   <span> 
			       <h2>Registration Form</h2> 
                   Already have an account?  
                   <h4><Link to="/account/signin">Sign in</Link></h4>
                   </span>
             
                
            </div>
            {loading}
        {error && <div>Student ID or Email has been taken</div>}
        {message}
        <form className="form_wrap" onSubmit={submitHandler}>
        <div className="profilepic_grp">
           <div className="input_wrap">
            {uploadButton ? <div>
                <label>Upload a profile picture</label>
                <input type="file" onChange={uploadFileHandler}></input>
                <button onClick={(e) => setUploadButton(false)}>No profile picture</button>
              </div> : <div className="uploaded"> Uploaded profile picture successfully </div>
            }
            {upLoading && <div>Uploading...</div>}
          </div>
          </div>
            <div className="input_grp">
          
                <div className="input_wrap"> 
                   <label>First Name:</label>
                   <input
                   type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter First Name"
                        required
                        onChange={(e) => setFname(e.target.value)}
                      ></input>
                </div>
                <div className="input_wrap">
                      <label>Last Name:</label>
                      <input
                        type="text"
                        id="sname"
                        name="sname"
                        placeholder="Enter Surname"
                        required
                        onChange={(e) => setSname(e.target.value)}
                      ></input>
                </div>
              </div>
 
            <div className="input_grp">
             <div className="input_wrap">
                  <label>Student ID:</label>
                  <input 
                    type="text"
                    id="studentid"
                    name="studentid"
                    placeholder="Enter Student-ID"
                    required
                    onChange={(e) => setStudentid(e.target.value)}
                    ></input>
                </div>
          
              <div className="input_wrap">
                  <label>Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
               </div>
          </div>
         
          
         <div className="input_grp">
              <div className="input_wrap">
                  <label for="gender">Choose a Gender: </label>
                  <select className="select-css"
                    id="gender"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
              </div>

              <div className="input_wrap">
              <label for="school">University: </label>
              <select className ="select-css"
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
              </div>
              </div>
              <br></br>
 
          <div className="input_grp">
               <div className="input_wrap">
              <label>Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Address"
                required
                onChange={(e) => setStreet(e.target.value)}
              ></input>
          </div> 
 
          <div className="input_wrap">
              <label>City:</label>
                  <select className="select-css"
                    id="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="Dunedin">Dunedin</option>
                    <option value="Auckland">Auckland</option>
                    <option value="Wellington">Wellington</option>
                    <option value="Christchurch">Christchurch</option>
                  </select>
          </div> 
        </div>
          
          <div className="input_grp">
              <div className="input_wrap">
              <label>Post Code:</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                placeholder="Enter Postcode"
                required
                onChange={(e) => setPostcode(e.target.value)}
               ></input>
              </div> 
              <div className="input_wrap">
              <label>Region:</label>
              <input
                type="text"
                id="region"
                name="region"
                placeholder="Enter Region"
                required
                onChange={(e) => setRegion(e.target.value)}
               ></input>
              </div> 
          </div>
          <div className="input_grp"> 
              <div className="input_wrap">
                  <label>Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
              </div>
              <div className="input_wrap">
                  <label>Re-Enter Password:</label>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    placeholder="Re-Enter Password"
                    required
                    onChange={(e) => setRePassword(e.target.value)}
                  ></input>
              </div>
          </div> 


 <div className="input_grp">
 
          <div className="input_wrap">
					<input type="submit" value="Register Now" class="submit_btn"></input>
		  </div>
 </div>
 
        </form>
      
      </div>
      </div>
   
 
      
    
  );
}
 
export default SignUp;