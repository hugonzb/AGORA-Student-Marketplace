import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import About from "./screens/About";
import Confirmation from "./screens/Confirmation";
import ViewListing from "./screens/ViewListing";
import Checkout from "./screens/Checkout";
import CreateListing from "./screens/CreateListing";
import Profile from "./screens/Profile";
import Navbar from "./Navbar.js";
import NavbarSignedin from "./NavbarSignedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UpdateListing from "./screens/UpdateListing";
import History from "./screens/History";
import EditProfile from "./screens/EditProfile";

function App(props) {
  const [search, setSearch] = useState("");
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
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/${search}`}>
              <button className="search-button" type="submit" value="submit">
                <FontAwesomeIcon size="lg" icon={faSearch} />
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="main">
        <div className="content-display">
          <Route path="/" exact={true} component={Home} />
          <Route path="/:id" exact={true} component={Home} />
          <Route path="/listing/:id" component={ViewListing} />
          <Route path="/account/signup" component={SignUp} />
          <Route path="/account/signin" component={SignIn} />
          <Route path="/info/about" component={About} />
          <Route
            path="/listingcomplete/confirmation"
            component={Confirmation}
          />
          <Route path="/checkout/:id" component={Checkout} />
          <Route path="/account/profile" component={Profile} />
          <Route path="/account/createlisting" component={CreateListing} />
          <Route path="/account/updatelisting/:id" component={UpdateListing} />
          <Route path="/account/history" component={History} />
          <Route path="/account/editprofile/:id" component={EditProfile} />
        </div>
      </div>
      <div className="footer">All Rights Reserved.</div>
    </BrowserRouter>
  );
}

export default App;
