import React from "react";

function SignUp(props) {
  return (
    <div className="sign-up-container">
      Welcome to Agora! Please sign up using the form below.
      <div className="createAccountContainer">
        <form className="create-account-form">
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"></input>
          <br></br>
          <label for="mname">Middle name:</label>
          <input type="text" id="mname" name="mname"></input>
          <br></br>
          <label for="sname">Surname:</label>
          <input type="text" id="sname" name="sname"></input>
          <br></br>
          <label for="gender">Choose a gender: </label>
          <select id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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
          <label for="school">University:</label>
          <select id="school" name="school">
            <option value="University of Auckland">University of Auckland</option>
            <option value="Auckland University of Technology (AUT)">
              Auckland University of Technology (AUT)
            </option>
            <option value="University of  Waikato">University of Waikato</option>
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
          <input type="text" id="address" name="address"></input>
          <br></br>
          <label for="city">City:</label>
          <input type="text" id="city" name="city"></input>
          <br></br>
          <label for="postcode">Postcode:</label>
          <input type="text" id="postcode" name="postcode"></input>
          <br></br>
          {/* The following is to let the user upload an image into the server however I dont believe its a working version */}
          {/* <label for="id_photo">ID photo:</label>
          <input type="image" id="id_photo" name="id_photo"></input>
          <br></br> */}
          <input type="submit" value="Submit"></input>
          <br></br>
        </form>
      </div> 
    </div> //leave this in its a parent from App.js everything on the page will need to go in here
  );
}

export default SignUp;
