import React from "react";
import agoralogo from "./images/agoralogo.png";




render(){
	return(
		<nav> 
      <div className="logoBtn">;
      <img className="agora-logo" src={agoralogo} alt="agoralogo"></img>
              <div className="agora-text">AGORA </div>{" "}
              <div className="sm-text"> Student Marketplace</div>

                    <div className="btn">;
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
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