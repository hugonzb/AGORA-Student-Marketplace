import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import About from "./screens/About";
import contact from "./screens/contact";
import agoralogo from "./images/agoralogo.png";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">
          <Link to="/"><img className="agora-logo" src={agoralogo} alt="listing"></img>
          </Link>
          <div className="links">
            <Link to="/">HOME </Link>
            <Link to="/signup">REGISTER </Link>
            <Link to="/signin">SIGN IN </Link>
            <Link to="/About">ABOUT US </Link>
            <Link to="/contact">CONTACT US </Link>
          </div>
        </div>
        <div className="search">
          <div>
            <form>
              <input className = "search-input" name="searchWord" placeholder="What are you looking for? .."/>
            </form>
          </div>
        </div>
        <div className="main">
          <div className="content-display">
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>   
            <Route path="/About" component={About}/>
            <Route path="/contact" component={contact}/>          
            <Route path="/" exact={true} component={Home}/>
          </div>
        </div>
        <div className="footer">
          All Rights Reserved 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
