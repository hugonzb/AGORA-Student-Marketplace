import React from 'react';
import styled from 'styled-components';

const UI = styled.ul
	list-style: none;
	display; flex;
	flex-flow: row nowrap;

	li{
		padding: 18px 10px;
	}

	@media {max-width: 768px){
		flex-flow:column nowrap;
		background-color: #0D2538;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
	}


const RightNav = () => {
	return(
	 <div>
		<div className= "logo">
		  Nav Bar
		</div> 
		<ul>
		 <li>Home</li>
		 <li>Register</li>
		 <li>Sign In</li>
		 <li>About Us</li>
		 <li>Contact Us</li>
		</ul>
	 </div>

	)
}

export default RightNav;