import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import About from "./screens/About";
import Contact from "./screens/contact";
import ViewListing from "./screens/ViewListing";
import CreateListing from "./screens/CreateListing";
import Profile from "./screens/Profile";
import Navbar from "./Navbar.js";
import NavbarSignedin from "./NavbarSignedin";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div className="maindisplay">
        {userInfo ? <NavbarSignedin /> : <Navbar />}
      </div>
      <div className="search">
        <div>
          <form>
            <input
              className="search-input"
              name="searchWord"
              placeholder="I'm looking for..."
            />
          </form>
        </div>
      </div>
      <div className="main">
        <div className="content-display">
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact={true} component={Home} />
          <Route path="/listing/:id" component={ViewListing} />
          <Route path="/CreateListing" component={CreateListing} />
        </div>
      </div>
      <div className="footer">All Rights Reserved.</div>
    </BrowserRouter>
  );
}

export default App;
