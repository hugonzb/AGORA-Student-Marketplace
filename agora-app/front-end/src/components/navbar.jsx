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

const Navbar = () =>{
    return(
     <div>
        <div className= "logo">
        <Link to="/">HOME </Link>
            { userInfo ? ( <Link to="/profile" >Welcome {userInfo.fname}</Link>)
                             :
                                (   <div>
                                    <Link to="/signup">REGISTER </Link>
                                    <Link to="/signin">SIGN IN </Link></div> )
            }
            <Link to="/About">ABOUT </Link>
            <Link to="/contact">CONTACT US </Link>
            <Link to="/profile"><img className="profile-icon" src={profileicon} alt="profile"></img>
            </Link>
         
     </div>

    )
}

export default Navbar

 <Link to="/">HOME </Link>
            { userInfo ? ( <Link to="/profile" >Welcome {userInfo.fname}</Link>)
                             :
                                (   <div>
                                    <Link to="/signup">REGISTER </Link>
                                    <Link to="/signin">SIGN IN </Link></div> )
            }
            <Link to="/About">ABOUT </Link>
            <Link to="/contact">CONTACT US </Link>
            <Link to="/profile"><img className="profile-icon" src={profileicon} alt="profile"></img>
            </Link>