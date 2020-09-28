import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../actions/userActions";
import { Link } from "react-router-dom";
import "../signup.css";
import agoralogo from "../images/agoralogo.png";
import Axios from "axios";

function EditProfile(props) {
  const [fname, setFname] = useState("");
  const [studentid, setStudentid] = useState("");
  const [sname, setSname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("Male");
  const [university, setUniversity] = useState("University of Auckland");
  const [street_address, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    "/profilePictures/defaultprofileicon.jpg"
  );
  const [upLoading, setUpLoading] = useState(false);
  const userSignup = useSelector((state) => state.userSignup);
  const { loading, userInfo, error } = userSignup;
  // This field will determine if the upload profile picture button is available
  // for the user to press or not.
  const [uploadButton, setUploadButton] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      setFname(userInfo.fname);
      setSname(userInfo.sname);
      setStudentid(userInfo.studentid);
      setUsername(userInfo.username);
      setPassword(userInfo.password);
      setEmail(userInfo.email);
      setDOB(userInfo.dob);
      setGender(userInfo.gender);
      setUniversity(userInfo.university);
      setStreet(userInfo.street_address);
      setCity(userInfo.city);
      setPostcode(userInfo.postcode);
      setProfilePicture(userInfo.profilePicture);
    }
    return () => {};
    // eslint-disable-next-line
  }, [userInfo]);

  const uploadFileHandler = (e) => {
    setUploadButton(false);
    const file = e.target.files[0];
    const bodyFormData = new FormData();

    bodyFormData.append("image", file);
    // Now we are ready to send an AJAX request with Axios

    // This line will produce the div that tells the user their file is uploading
    setUpLoading(true);
    Axios.post("/api/users/uploadProfilePicture", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setProfilePicture(response.data);
        // This line will remove the "uploading..." div
        setUpLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUpLoading(false);
      });
  };

  /* This handler will run when the user clicks on the create account button */
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        studentid,
        fname,
        sname,
        username,
        password,
        email,
        dob,
        gender,
        university,
        street_address,
        city,
        postcode,
        profilePicture
      )
    );
  };

  return loading ? (
    <div className="loading">Loading profile editor ...</div>
  ) : error ? (
    <div className="error">
      {" "}
      {error} - Make sure you are running the server to fetch data{" "}
    </div>
  ) : (
    <div className="wrapper">
      <div className="registration_form">
        <div className="form-heading">
          <img src={agoralogo} className="sign-up-logo" alt="" />

          <span>
            <h4>Edit profile page:</h4>
            <p> Student ID: </p>
          </span>
        </div>
        {loading}
        {error && <div>Student ID or Email Address has been taken.</div>}
        <form className="form_wrap" onSubmit={submitHandler}>
          <div className="input_grp">
            <div className="input_wrap">
              <label>First Name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
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
              <label>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter a Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>

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
          </div>

          <div className="input_grp">
            <div className="input_wrap">
              <label for="gender">Choose a Gender: </label>
              <select
                className="select-css"
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
              <select
                className="select-css"
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
                <option value="University of Waikato">
                  University of Waikato
                </option>
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
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter city"
                required
                onChange={(e) => setCity(e.target.value)}
              ></input>
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
              <label>Date of Birth:</label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                required
                onChange={(e) => setDOB(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="input_grp">
            <div className="input_wrap">
              {uploadButton ? (
                <div>
                  <label>Upload a profile picture</label>
                  <input type="file" onChange={uploadFileHandler}></input>
                  <button onClick={(e) => setUploadButton(false)}>
                    No profile picture
                  </button>
                </div>
              ) : (
                <div className="uploaded">
                  {" "}
                  Uploaded profile picture successfully{" "}
                </div>
              )}
              {upLoading && <div>Uploading...</div>}
            </div>
          </div>

          <div className="input_grp">
            <div class="input_wrap">
              <input
                type="submit"
                value="Update Profile"
                class="submit_btn"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
