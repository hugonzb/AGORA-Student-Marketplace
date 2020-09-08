import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from '../actions/userActions';
import agoralogo from "../images/agoralogo.png";

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
    // eslint-disable-next-line
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

    <div className="sign-in-container">

      <div className="createAccountContainer">
      <div className = "sign-in-logo"> <img src={agoralogo} 
                        className="sign-in-logo" alt=""/> </div>
        <form className="create-account-form" onSubmit={submitHandler}>
          <h2>Sign In</h2>
          {loading && <div>Loading...</div>}
          {error && <div>Invalid Email or Password</div>}
          <div className="create-account-link">
            <Link to="/SignUp">or Create an Account</Link>
          </div>
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
          <button type="submit" value="Submit">Sign In</button>
          <br></br>
        </form>
      </div>

    </div>
  );
}

export default SignIn;
