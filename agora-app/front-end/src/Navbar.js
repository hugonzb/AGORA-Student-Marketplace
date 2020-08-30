import React,{Component} from "react";
import agoralogo from "./images/agoralogo.png";
import "./navbar.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
class Navbar extends Component{

state={
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
            <a href="/"><img src={agoralogo} 
            className="logo" alt=""/></a> 
            </div>

                    <div className="btn" onClick=
                    {this.handleClick}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>          
             </div>

              <ul className={this.state.isOpen ? 
              "showNav":"undefined"}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/signup">Register</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li> 
              </ul>
         </nav>
               
	)
}

}

export default Navbar;