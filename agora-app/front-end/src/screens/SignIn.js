import React from "react";

function SignIn(props) {
  return (
    <div className="sign-in-container">
      This is the sign in page
      <div className="signInContainer">
        <form className="sign-in-form" onSubmit={submitHandler}>
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
