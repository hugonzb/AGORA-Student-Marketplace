import React, { useEffect, useState } from 'react';
import {link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../actions/userActions';
import { userInfo } from "os";



function SignUp(props) {

  const [name, setName] = useState('');

  /* This handler will run when the user clicks on the create account button */
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUp(name));
  }

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => { };
  }, [userInfo]);


  return (
    <div className="sign-up-container">
      Welcome to Agora! Please sign up using the form below.
      <div className="createAccountContainer">
        <form className="create-account-form" onSubmit={submitHandler}>
          <label for="fname">First name:</label>
          <input type="text" name="fname" placeholder="first name" onChange={(e)=>setName(e.target.value)}></input>
          <button type="button">Create Account</button>
        </form>
        {/* The full form can be found in old_signup_form.txt in front end. Im currently trying to simplify it before making
        it a full massive form.  */}
      </div>
    </div> //leave this in its a parent from App.js everything on the page will need to go in here
  );
}

export default SignUp;
