import React, { useState, useEffect } from "react";
import useDispatch, { useSelector } from 'react-redux';
import {logout} from '../actions/userActions';

function Profile(props) {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [id, setID] = useState('');

	const userSignin = useSelector(state => state.userSignin);
	const { userInfo } = userSignin;

	const dispatch = useDispatch();


	const handleLogout = () => {
		dispatch(logout());
		// This lign redirects the user to the sign in screen
		// when they press logout
		props.history.push("/signin");
	}

	useEffect(() => {
		// If userInfo exists, set the email and name fields
		if (userInfo) {
			// Log the name field just to make sure it's correct
			console.log(userInfo.name);
			setEmail(userInfo.email);
			setName(userInfo.name);
			setName(userInfo.id);
		}
		return () => { };
	}, [userInfo])

	return (
		<div className="sign-in-container">
			Your Profile
			<div className="createAccountContainer">
				<form className="profile-container">
					<h2> Profile </h2>
					<label for="username">Student ID: {{ id }}</label>
					<br></br>
					<label for="name">Name:{{ name }}</label>
					<br></br>
				</form>
			</div>




		</div>
	);
}

export default Profile;