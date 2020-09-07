import React, { Component } from "react";
import agoralogo from "./images/agoralogo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

class NavbarSignedin extends Component{
    state = {
        isOpen:false
    }

    handleClick=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }

       closeNavbar = ()=>{
     this.setState({
     isOpen:false
	   })
    }

    render(){
        return(  
            <nav>
                <div className="logoBtn">
                    <div className="logo">
                        <Link to="/" onClick=
                        {this.closeNavbar}><img src={agoralogo} 
                        className="logo" alt=""/></Link>
                        <div className="agora-text">AGORA</div>
                        <div className="sm-text">Student Marketplace</div>
                    </div>
                    <div className="btn" onClick=
                        {this.handleClick}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>          
                </div>
                <div className="nav-buttons">
                    <ul className={this.state.isOpen ? "showNav":"headerNav"}>
                        <li><Link to="/"onClick=
                        {this.closeNavbar}> Home</Link></li>
                        <li><Link to="/account/profile"onClick=
                        {this.closeNavbar}> Profile</Link></li>
                        <li><Link to="/account/createlisting"onClick=
                        {this.closeNavbar}> List an Item</Link></li>
                        <li><Link to="/info/about"onClick=
                        {this.closeNavbar}> About</Link></li>
                        <li><Link to="/info/contact"onClick=
                        {this.closeNavbar}> Contact Us</Link></li> 
                    </ul>
                </div>
                
            </nav>          
        )
    }
}

export default NavbarSignedin;