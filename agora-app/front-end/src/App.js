import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="main">
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
          <div className="content-display">
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/" exact={true} component={Home} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
