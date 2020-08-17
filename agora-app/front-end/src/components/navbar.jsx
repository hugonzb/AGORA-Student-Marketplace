import React from 'react';
import styled from 'styled-components';


const Nav = styled.nav`
width: 100%;
height: 65px;
border-bottom: 2px solid #f1f1f1;
padding: 0 20px 
display: flex; 
justify-content: space-between;

.logo {
    padding: 15px 0;
}

ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding: 

    li{
        padding: 18px 10px;
  }
}
`

const Navbar = () =>{
    return(
     <div>
        <div className= "logo">
          Nav Bar
        </div> 
        <ul>
         <li>Home</li>
         <li>Register</li>
         <li>Sign In</li>
         <li>About</li>
         <li>Contact Us</li>
        </ul>
     </div>

    )
}

export default Navbar