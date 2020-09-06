import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ViewListing from "./screens/ViewListing";
import CreateListing from "./screens/CreateListing";
import Profile from "./screens/Profile";
import Navbar from "./Navbar.js";
import NavbarSignedin from "./NavbarSignedin";

function App(props) {
  const [search, setSearch] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
   <div className= "maindisplay">
   {userInfo ? (
      <NavbarSignedin />
            ) : (
      <Navbar />
    )}

        </div> 
        <div className="search">
          <div>
            <form>
              <input
                className="search-input"
                name="searchWord"
                placeholder="I'm looking for..."
                onChange={e => setSearch(e.target.value)}
              />
              <Link to={`/${search}`}>
                <button type="submit" value="submit">
                  Search
                </button>
              </Link>
            </form> 
          </div>
        </div>
        <div className="main">
          <div className="content-display">
            <Route path="/" exact={true} component={Home} />
            <Route path="/:id" component={Home} />
            <Route path="/listing/:id" component={ViewListing} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route path="/createlisting" component={CreateListing} />
          </div>
        </div>
        <div className="footer">All Rights Reserved.</div>
    </BrowserRouter>
  );
}

export default App;
