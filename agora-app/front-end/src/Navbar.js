import React,{Component} from "react";
import agoralogo from "./images/agoralogo.png";
import "./navbar.css";

class Navbar extends Component{

render(){
	return(
		<nav> 
  
      <div className="logoBtn">
      <div className="logo">
      <a href="#"><img src={agoralogo} 
      className="logo" alt=""/></a> 
              

                    <div className="btn">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    
                  
                    </div>
                </div>
                </div>
              
              
              <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
              </ul>
            
               </nav>
               
	)
}

}

export default Navbar;