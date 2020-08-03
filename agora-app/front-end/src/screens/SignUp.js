import React from "react";

function SignUp(props) {
  return (
    <div className="sign-up-container">
      Welcome to Agora! Please sign up using the form below.
      <form className="sign-up-form">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input>
        <br></br>
        <label for="mname">Middle name:</label>
        <input type="text" id="mname" name="mname"></input>
        <br></br>
        <label for="sname">Surname:</label>
        <input type="text" id="sname" name="sname"></input>
        <br></br>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"></input>
        <br></br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"></input>
        <br></br>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email"></input>
        <br></br>
      </form>
    </div> //leave this in its a parent from App.js everything on the page will need to go in here
  );
}

export default SignUp;
