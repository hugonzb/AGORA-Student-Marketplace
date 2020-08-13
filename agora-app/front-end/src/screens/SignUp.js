import React, { useEffect, useState } from "react";
//import {link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../actions/userActions";

function SignUp(props) {
  const [fname, setFname] = useState("Hugo");
  const [mname, setMname] = useState('');
  const [sname, setSname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState("Male");
  const [university, setUniversity] = useState('');
  const [street_address, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const userSignup = useSelector(state=>state.userSignup);
  const {loading, userInfo, error} = userSignup;
  /* For some reason this gives the wrong date???*/
  var currDate = new Date();
  var currDateString = currDate.getDay() + "/" + currDate.getMonth() + "/" + currDate.getFullYear();
  console.log(currDateString);
  const [date_created/*, setDateCreated*/] = useState("01/01/0001"); // This  still needs to be updated to getting the current date

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {};
    // eslint-disable-next-line
  }, [userInfo]);

  /* This handler will run when the user clicks on the create account button */
  const submitHandler = (e) => { 
    e.preventDefault();
    console.log(fname + "fname here");
    console.log(mname);
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(dob);
    console.log(gender);
    console.log(university);
    console.log(street_address);
    console.log(city);
    console.log(postcode);
    console.log(date_created);
    dispatch(signUp(fname, mname, sname, username, password, email,
      dob, gender, university, street_address, city, postcode, date_created));
  }
  
  return (
    <div className="sign-up-container">
      Welcome to Agora! Please sign up using the form below.
      <div className="createAccountContainer">
        <form className="create-account-form" onSubmit={submitHandler}>
          <label for="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="first name"
            onChange={(e) => setFname(e.target.value)}
          ></input>
          <br></br>
          <label for="mname">Middle name:</label>
          <input
            type="text"
            id="mname"
            name="mname"
            placeholder="middle-name"
            onChange={(e) => setMname(e.target.value)}
          ></input>
          <br></br>
          <label for="sname">Surname:</label>
          <input
            type="text"
            id="sname"
            name="sname"
            placeholder="surname"
            onChange={(e) => setSname(e.target.value)}
          ></input>
          <br></br>
          <label for="gender">Choose a gender: </label>
          <select
            id="gender"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br></br>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br></br>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <label for="DOB"> Date of Birth:</label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            placeholder="01/01/2001"
            onChange={(e) => setDOB(e.target.value)}
          ></input>
          <br></br>
          <label for="school">University: </label>
          <select
            id="school"
            name="school"
            placeholder="select university"
            onChange={(e) => setUniversity(e.target.value)}
          >
            <option value="University of Auckland">
              University of Auckland
            </option>
            <option value="Auckland University of Technology (AUT)">
              Auckland University of Technology (AUT)
            </option>
            <option value="University of  Waikato">
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
          <br></br>
          <label for="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="street address"
            onChange={(e) => setStreet(e.target.value)}
          ></input>
          <br></br>
          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <br></br>
          <label for="postcode">Postcode:</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="postcode"
            onChange={(e) => setPostcode(e.target.value)}
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div> //leave this in its a parent from App.js everything on the page will need to go in here
  );
}

export default SignUp;
