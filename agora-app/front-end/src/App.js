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
        
          <div className="links">
            <Link to="/">Home </Link>
            <Link to="/signup">Sign Up </Link>
            <Link to="/signin">Sign In </Link>
          </div>
          <Link to="/">Agora </Link>
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
