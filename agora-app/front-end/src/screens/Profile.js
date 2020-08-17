import React, { useState } from "react";
import useDispatch from 'react-redux';
import logout from '../actions/userActions';

function Profile(props) {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	}

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