import React from "react";
import styled from "styled-components";



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

const Navbar = () => {
    return(
    <Nav>
        <div className="logo">
            Nav Bar
        </div>
        <RightNav/>
        
    
    </Nav>
     )
}

export default Navbar

