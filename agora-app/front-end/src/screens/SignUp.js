import React from "react";

function SignUp(props) {
  return (
    <div className="sign-up-container">
      Welcome to Agora! Please sign up using the form below.
      <div className="createAccountContainer">
        <form className="create-account-form">
          <label for="fname">First name:</label>
          <input type="text" name="fname" placeholder="first name"></input>
          <button type="button">Create Account</button>
        </form>
        {/* The full form can be found in old_signup_form.txt in front end. Im currently trying to simplify it before making
        it a full massive form.  */}
      </div>
    </div> //leave this in its a parent from App.js everything on the page will need to go in here
  );
}

export default SignUp;
