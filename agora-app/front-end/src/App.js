import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">
          <Link to="/">AGORA LOGO HERE </Link>
          <div className="links">
            <Link to="/">HOME </Link>
            <Link to="/signup">REGISTER </Link>
            <Link to="/signin">SIGN IN </Link>
            <Link to="/">ABOUT US </Link>
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
