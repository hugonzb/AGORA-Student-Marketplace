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

    render(){
        return(  
            <nav>
                <div className="logoBtn">
                    <div className="logo">
                        <Link to="/"><img src={agoralogo} className="logo" alt=""/></Link>
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Profile">Profile</Link></li>
                        <li><Link to="/CreateListing">List an Item</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact Us</Link></li> 
                    </ul>
                </div>
                
            </nav>          
        )
    }
}

export default NavbarSignedin;