import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../actions/userActions";
import { Link } from "react-router-dom";
import "../signup.css";

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
<div class="wrapper">
	<div class="registration_form">
		<div class="title">
			Registration Form
		</div>

		<form>
			<div class="form_wrap">
				<div class="input_grp">
					<div class="input_wrap">
						<label for="fname">First Name</label>
						<input type="text" id="fname">
						</input>
					</div>
					<div class="input_wrap">
						<label for="lname">Last Name</label>
						<input type="text" id="lname">
						</input>
					</div>
				</div>
				<div class="input_wrap">
					<label for="email">Email Address</label>
					<input type="text" id="email"></input>
				</div>
				<div class="input_wrap">
					<label>Gender</label>
					<ul>
						<li>
							<label class="radio_wrap">
								<input type="radio" name="gender" value="male" class="input_radio" checked>
								<span>Male</span>
								</input>
							</label>

						</li>
						<li>
							<label class="radio_wrap">
								<input type="radio" name="gender" value="female" class="input_radio">
								<span>Female</span>
								</input>
							</label>
						</li>
					</ul>
				</div>
				<div class="input_wrap">
					<label for="city">City</label>
					<input type="text" id="city">
					</input>
				</div>
				<div class="input_wrap">
					<label for="country">Country</label>
					<input type="text" id="country">
					</input>
				</div>
				<div class="input_wrap">
					<input type="submit" value="Register Now" class="submit_btn">
					</input>
				</div>
			</div>
		</form>
	</div>
</div>
);
};//I don't know why but you need this here. 
export default SignUp;
