import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { BrowserRouter, Link } from "react-router-dom";

function Profile(props) {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [username, setUsername] = useState("");
  const [university, setUniversity] = useState("University of Auckland");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  // This runs when the logout button is pressed
  const handleLogout = () => {
    dispatch(logout());
    // This line redirects the user to the sign in screen
    // when they press logout
    props.history.push("/signin");
  };

  useEffect(() => {
    // If userInfo exists, set the email and name fields
    if (userInfo) {
      // Log the name field just to make sure it's correct
      //console.log("user name: " + userInfo.fname);
      //console.log("email: " + userInfo.email);
      //console.log("user id: " + userInfo.id);
      setName(userInfo.fname);
      setID(userInfo.id);
      setEmail(userInfo.email);
      setUsername(userInfo.username);
      setUniversity(userInfo.university);
    }
    return () => {};
  }, [userInfo]);

  return (
    <BrowserRouter>
      {userInfo ? (
        <div className="sign-in-container">
          <h3> Welcome to your profile page {userInfo.fname} </h3>
          <div className="profile-container">
            <div className="profile-contents">
              <h2> Profile Settings: </h2>
              <form className="profile-form">
                <label for="username" value={id}>
                  Student ID: {userInfo.studentid}
                </label>
                <br></br>
                <label for="name" value={fname}>
                  Name: {userInfo.fname}
                </label>
                <br></br>
                <label for="email" value={email}>
                  Email: {userInfo.email}
                </label>
                <br></br>
                <label for="username" value={username}>
                  Username: {userInfo.username}
                </label>
                <br></br>
                <label for="email" value={university}>
                  University: {userInfo.university}
                </label>
                <br></br>
              </form>
            </div>
            <div className="profile-contents">
              <h2> Your Listings: </h2>
              <p> please note this feature is currently not working</p>
            </div>
          </div>
          <button type="button" className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">Sign in</Link>
          <Link to="/signp">Sign Up</Link>
        </div>
      )}
    </BrowserRouter>
  );
}

export default Profile;
