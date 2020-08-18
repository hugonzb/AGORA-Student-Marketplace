import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { BrowserRouter, Link } from "react-router-dom";

function Profile(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");

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
      console.log("user name: " + userInfo.fname);
      console.log("email: " + userInfo.email);
      console.log("user id: " + userInfo.id);
      //setEmail(userInfo.email);
      setName(userInfo.name);
      setID(userInfo.id);
      setEmail(userInfo.email);
    }
    return () => {};
  }, [userInfo]);

  return (
    <BrowserRouter>
      {userInfo ? (
        <div className="sign-in-container">
          Your Profile
          <div className="createAccountContainer">
            <form className="profile-container">
              <h2> Profile </h2>
              <label for="username" value={id}>
                Student ID: {userInfo.studentid}
              </label>
              <br></br>
              <label for="name" value={name}>
                Name: {userInfo.fname}
              </label>
              <br></br>
              <label for="email" value={email}>
                Email: {userInfo.email}
              </label>
              <br></br>
            </form>

            <button type="button" className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
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
