import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../actions/userActions";
import { Link } from "react-router-dom";
import "../signup.css";
import { removeUser } from "../actions/userActions";
import agoralogo from "../images/agoralogo.png";
import Select from "react-select";

import makeAnimated from "react-select/animated";

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
    if (userInfo) {
      props.history.push("/account/signin");
      alert("You have successfully created an account");
    }
    dispatch(removeUser());
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
  };


const animatedComponents = makeAnimated();

const Gender = [

{label: "Male", value: "Male"},
{label: "Female", value: "Female"},
{label: "Other", value: "Other"},

];

 const Universities = [
  { label: "University of Auckland", value: "University of Auckland" },
  { label: "Auckland University of Technology", value: "Auckland University of Technology" },
  { label: "University of Waikato", value: "University of Waikato" },
  { label: "Massey University", value: "Massey University" },
  { label: "Victoria University of Wellington", value: "Victoria University of Wellington" },
  { label: "University of Canterbury", value: "University of Canterbury" },
  { label: "Lincoln University", value: "Lincoln University" },
  { label: "University of Otago", value: "University of Otago" },
];

  return (
    <div className="wrapper">
        <div className="registration_form">
            <div className="form-heading">
                
               
                   <img src={agoralogo} 
                   className="sign-up-logo" alt=""/>
               
                   <span> 
			       <h4>Registration Form</h4> 
                   Already have an account?
                   <h4><Link to="/account/signin">Sign in</Link></h4>
                   </span>
             
                
            </div>
            {loading}
        {error && <div>Student ID or Email Address has been taken.</div>}
        <form className="form_wrap" onSubmit={submitHandler}>
            
            <div className="input_grp">
                <div className="input_wrap"> 
                   <label>First Name:</label>
                   <input
                   type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter First Name"
                        required
                        onChange={(e) => setFname(e.target.value)}
                      ></input>
                </div>
                <div className="input_wrap">
                      <label>Last Name:</label>
                      <input
                        type="text"
                        id="sname"
                        name="sname"
                        placeholder="Enter Surname"
                        required
                        onChange={(e) => setSname(e.target.value)}
                      ></input>
                </div>
              </div>

            <div className="input_grp">
             <div className="input_wrap">
                  <label>Student ID:</label>
                  <input 
                    type="text"
                    id="studentid"
                    name="studentid"
                    placeholder="Enter Student-ID"
                    required
                    onChange={(e) => setStudentid(e.target.value)}
                    ></input>
                </div>
          
              <div className="input_wrap">
                  <label>Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
               </div>
          </div>
    
          <div className="input_grp">
              <div className="input_wrap">
                  <label>Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter a Username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
              </div>
 
              <div className="input_wrap">
                  <label>Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
              </div>

          </div> 
          
          <div className="input_grp">

            <div className="input_wrap">
            <div className="gender">
              <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Select options={Gender} components={animatedComponents} onChange={(e) => setGender(e.target.value)}/>
                        </div>
                    <div classNane="col-md-4"></div>
                    </div>
                </div>
              </div> 
            </div>

              <div className="input_wrap">
                  <label for="DOB"> Date of Birth:</label>
                  <input
                    type="date"
                    id="DOB"
                    name="DOB"
                    required
                    onChange={(e) => setDOB(e.target.value)}
                  ></input>
              </div>
          </div>
         

          <div className="input_grp">
               <div className="input_wrap">
                  <label>Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter Address"
                    required
                    onChange={(e) => setStreet(e.target.value)}
                  ></input>
               </div> 

               <div className="input_wrap">
                  <label>City:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter city"
                    required
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
               </div> 
          </div>

          <div className="input_grp">
              <div className="input_wrap">
              <label>Post Code:</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                placeholder="Enter Postcode"
                required
                onChange={(e) => setPostcode(e.target.value)}
               ></input>
              </div> 
          
          <div className= "input_wrap">
          <div className= "universities">
          <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Select options={Universities} components={animatedComponents} onChange={(e) => setUniversity(e.target.value)}/>
                    </div>
                <div classNane="col-md-4"></div>
            </div>
            </div>
          </div>
          </div>

          </div>


          <div class="input_wrap">
					<input type="submit" value="Register Now" class="submit_btn"></input>
		  </div>
          
        </form>
      
      </div>
      </div>
   

      
    
  );
}
 
export default SignUp;
