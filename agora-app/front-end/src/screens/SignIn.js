import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from '../actions/userActions';
import agoralogo from "../images/agoralogo.png";
import PropagateLoader from "react-spinners/PropagateLoader";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  /* If user is logged in, go to the home screen. */
  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => { };
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      signIn(
        email, password
      )
    );
  };

  return (
    <div className="home-container">
      <div className="sign-in-container">
        <div className = "sign-in-logo">
          <img src={agoralogo} className="sign-in-logo" alt=""/> </div>
          <form className="create-account-form" onSubmit={submitHandler}>
            <div className="signin-header">Sign In</div>
            {loading && <div className="loading-signin">
              <PropagateLoader
              size={10}
              color={"#123abc"}
              /></div>}
            {error && <div>Invalid Email or Password</div>}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br></br>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="signin-button" type="submit" value="Submit">SIGN IN</button>
            <br></br>
          </form>
          <div className="create-account-link">
          <br></br>
              <Link to="/account/signup">or Create an Account</Link>
            </div>
        </div>
      </div>
  );
}

export default SignIn;
