import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../actions/userActions";
import { Link } from "react-router-dom";

function SignUp(props) {
  const [fname, setFname] = useState("");
  const [studentid, setStudentid] = useState("");
  const [sname, setSname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("Male");
  const [university, setUniversity] = useState("University of Auckland");
  const [street_address, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const userSignup = useSelector((state) => state.userSignup);
  const { loading, userInfo, error } = userSignup;

  const dispatch = useDispatch();

  useEffect(() => {
    /*if (userInfo) {
      props.history.push("/signin");
      alert("You have successfully created an account");
    }*/
    return () => {};
    // eslint-disable-next-line
  }, [userInfo]);

  /* This handler will run when the user clicks on the create account button */
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        studentid,
        fname,
        sname,
        username,
        password,
        email,
        dob,
        gender,
        university,
        street_address,
        city,
        postcode
      )
    );
    error && props.history.push("/signin");
  };
  
  return (
    <div className="sign-up-container">
      <h2>Welcome to Agora! Please enter your details to sign up using the form below.</h2>
      <div className="createnewAccountContainer">
        {loading}
        {error && <div>Email or Student ID has been taken</div>}
        <form className="create-new-account-form" onSubmit={submitHandler}>

          <label>Student ID:</label>
          <input
            type="text"
            id="studentid"
            name="studentid"
            placeholder="Enter Student-ID"
            required
            onChange={(e) => setStudentid(e.target.value)}
          ></input>
          <br></br>

          <label>First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter First Name"
            required
            onChange={(e) => setFname(e.target.value)}
          ></input>
          <br></br>

          <label>Last Name:</label>
          <input
            type="text"
            id="sname"
            name="sname"
            placeholder="Enter Surname"
            required
            onChange={(e) => setSname(e.target.value)}
          ></input>
          <br></br>
          <label for="gender">Choose a Gender: </label>
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

          <label>User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter a Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br></br>

          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <label for="DOB"> Date of Birth:</label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            required
            onChange={(e) => setDOB(e.target.value)}
          ></input>
          <br></br>
          <label for="school">University: </label>
          <select
            id="school"
            name="school"
            placeholder="Select University"
            onChange={(e) => setUniversity(e.target.value)}
          >
            <option value="University of Auckland">
              University of Auckland
            </option>
            <option value="Auckland University of Technology (AUT)">
              Auckland University of Technology (AUT)
            </option>
            <option value="University of Waikato">University of Waikato</option>
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
          <label>Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter Address"
            required
            onChange={(e) => setStreet(e.target.value)}
          ></input>
          <br></br>
          <label>City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city"
            required
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <br></br>
          <label>Post Code:</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            placeholder="Enter Postcode"
            required
            onChange={(e) => setPostcode(e.target.value)}
          ></input>
          <br></br>
          <button type="submit" value="Submit">
            Register
          </button>
          <h4>Already have an account?</h4>
          <div className="link-new-acc">
            <Link to="/SignIn">Sign in</Link>
            </div>
        </form>
      </div>
    </div> //leave this in its a parent from App.js everything on the page will need to go in here
  );
}

export default SignUp;
