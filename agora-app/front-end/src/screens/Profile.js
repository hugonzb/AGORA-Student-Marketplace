import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {signIn} from '../actions/userActions';

function Profile(props) {
	return (
	<div className="sign-in-container">
	Your Profile
		<div className="createAccountContainer">
			<form className="profile-container">
			<h2> Profile </h2>
			<label for="username">Student ID:</label>
			<br></br>
			<label for="name">Name:</label>
			<br></br>
			</form>
			</div>



	
	</div>
	);



}

export default Profile;