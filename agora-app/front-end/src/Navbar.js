import React,{Component} from "react";
import agoralogo from "./images/agoralogo.png";
import "./navbar.css";

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
            <a href="#"><img src={agoralogo} 
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