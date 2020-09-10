import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { listListings } from "../actions/listingActions";
import { Link } from "react-router-dom";
import "../index.css";
import profileicon from "../images/profileicon.png";

function Profile(props) {
  const [name, setName] = useState("");
  const [searchWord] = useState("");
  const [category] = useState("");
  const [location] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [university, setUniversity] = useState("");
  const [city, setCity] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [sellerId] = useState(userInfo.studentid);
  const listingList = useSelector((state) => state.listingList);
  const { listings, loading, error } = listingList;
  const dispatch = useDispatch();

  // This runs when the logout button is pressed 
  const handleLogout = () => {
    dispatch(logout());
    // This line redirects the user to the sign in screen
    // when they press logout
    props.history.push("/account/signin");
  };

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.fname);
      setEmail(userInfo.email);
      setUsername(userInfo.username);
      setUniversity(userInfo.university);
      setCity(userInfo.city);
    }
    dispatch(listListings(searchWord, category, location, sellerId));
    return () => {};
    // eslint-disable-next-line
  }, [userInfo, searchWord, category, location, sellerId]);

  return (
      <> {userInfo ? (
        <div className="mainContainer">
          <div className="profileContainer">
            <h2> Profile </h2>

            <img src={profileicon} alt="profile" />
            <h2>
              {" "}
              <label for="name" value={name}>
                {userInfo.fname} {userInfo.sname}
              </label>
            </h2>

            <div className="profile-contents">
              <form className="profile-form">
                <label for="username" value={sellerId}>
                  Student ID: {sellerId}
                </label>
                <br></br>
                <label for="email" value={email}>
                  Email: {userInfo.email}
                </label>
                <br></br>
                <label for="username" value={username}>
                  Username: {userInfo.username}
                </label>
                <br></br>
                <label for="university" value={university}>
                  University: {userInfo.university}
                </label>
                <br></br>
                <label for="city" value={city}>
                  City: {userInfo.city}
                </label>
                <br></br>
              </form>
              <button type="button" className="logout" onClick={handleLogout}>
                LOGOUT
              </button>
            </div>
          </div>
          <div className="listingsContainer">
            LISTINGS
            {loading ? (
              <div className="loading">Loading listings ...</div>
            ) : error ? (
              <div className="error">
                {" "}
                {error} - 404 Server error: Server does not currently seem to be
                running.
              </div>
            ) : listings.length > 0 ? (
              <div className="listings">
                {listings.map((listing) => (
                  <li key={listing._id}>
                    <Link to={"/listing/" + listing._id}>
                      <div className="listing-container">
                        <div className="listing-image">
                          <img
                            className="listing-image"
                            src={listing.image}
                            alt="listing"
                          ></img>
                        </div>
                        <div className="listing-content">
                          <div className="listing-name">{listing.name}</div>
                          <div className="listing-price">
                            Asking Price: ${listing.price}
                          </div>
                          <div className="view-listing-user">
                            <img src={profileicon} alt="profile" />
                            <div className="view-listing-sellername">
                              {listing.seller}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </div>
            ) : (
              <div>
                {" "}
                You currently dont have any listings. Click "create listing" to
                get started!{" "}
                <Link to="/account/createlisting">Create listing</Link>
              </div>
            )}
          </div>
          <div className="watchlistContainer">WATCHLIST</div>
        </div>
      ) : (
        <div>
          <Link to="/account/signin">Sign in</Link>
          <Link to="/account/signup">Sign Up</Link>
        </div>
      )}
    </>
  );
}

export default Profile;
