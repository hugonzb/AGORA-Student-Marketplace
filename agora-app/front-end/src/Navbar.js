import React, { Component } from "react";
import agoralogo from "./images/agoralogo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component{
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
                        <li><Link to="/" onClick=
                        {this.closeNavbar} >Home</Link></li>
                        <li><Link to="/account/signup" onClick=
                        {this.closeNavbar} >Register</Link></li>
                        <li><Link to="/account/signin" onClick=
                        {this.closeNavbar} >Sign In</Link></li>
                        <li><Link to="/info/about" onClick=
                        {this.closeNavbar} >About</Link></li>
                    </ul>
                </div>
                
            </nav>          
        )
    }
}

export default Navbar;