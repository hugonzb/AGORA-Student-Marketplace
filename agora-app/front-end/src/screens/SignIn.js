import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function SignIn(props) {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  //const {loading, userInfo, error} = userSignin;

  const dispatch = useDispatch();

  /* This might need to be updated to match
  the useEffect() from the video */
  /*useEffect(() => {
    return () => { };
  }, [userInfo])
*/

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      SignIn(
        uname, password
      )
    );
  };

  return (
    <div className="sign-in-container">
      This is the sign in page
      <div className="createAccountContainer">
        <form className="create-account-form" onSubmit={submitHandler}>
          <label for="uname">Username:</label>
          <input
            type="text"
            id="uname"
            name="uname"
            placeholder="Username"
            onChange={(e) => setUname(e.target.value)}
          ></input>
          <br></br>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
