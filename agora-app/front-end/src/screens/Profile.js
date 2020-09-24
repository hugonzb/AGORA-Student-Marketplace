import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { listListings, deleteListing } from "../actions/listingActions";
import { Link } from "react-router-dom";
import "../index.css";
import PropagateLoader from "react-spinners/PropagateLoader";

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
  const [profilePicture, setProfilePicture] = useState(userInfo.profilePicture);
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

  const listingDelete = useSelector((state) => state.listingDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = listingDelete;

  const deleteHandler = (listing) => {
    alert("Successfully Deleted Listing: " + listing.name);
    dispatch(deleteListing(listing._id));
  };

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.fname);
      setEmail(userInfo.email);
      setUsername(userInfo.username);
      setUniversity(userInfo.university);
      setCity(userInfo.city);
      setProfilePicture(userInfo.profilePicture);
    }
    dispatch(listListings(searchWord, category, location, sellerId));
    return () => {};
    // eslint-disable-next-line
  }, [userInfo, searchWord, category, location, sellerId, successDelete]);

  return (
    <>
      {loadingDelete}
      {errorDelete}{" "}
      {userInfo ? (
        <div className="mainContainer">
          <div className="profileContainer">
            PROFILE
            <br></br>
            <img
              src={profilePicture}
              alt="profile"
              height="150"
              length="100"
            />
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
              <div className="edit-profile">
                <Link to={"/account/editprofile/" + userInfo.studentid}>
                  <button type="button" className="edit-profile-button">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <button type="button" className="logout" onClick={handleLogout}>
                LOGOUT
              </button>
            </div>
          </div>
          <div className="listingsContainer">
            ACTIVE LISTINGS
            {loading ? (
              <div className="loading">
                <PropagateLoader
                  size={20}
                  color={"#123abc"}
                /></div>
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
                    <div className="profile-listing">
                      <div className="profile-listing-image">
                        <Link to={"/listing/" + listing._id}>
                          <img
                            className="listing-image"
                            src={listing.image}
                            alt="listing"
                          ></img>
                        </Link>
                      </div>

                      <div className="listing-content">
                        <Link to={"/listing/" + listing._id}>
                          <div className="listing-name">{listing.name}</div>
                          <div className="listing-price">
                            Asking Price: ${listing.price}
                          </div>

                          <div className="delete-listing"></div>
                        </Link>
                      </div>
                      <div className="update-listing">
                        <Link to={"/account/updatelisting/" + listing._id}>
                          <button
                            type="button"
                            className="update-listing-button"
                          >
                            update
                          </button>
                        </Link>
                      </div>
                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => deleteHandler(listing)}
                      >
                        delete
                      </button>
                    </div>
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
