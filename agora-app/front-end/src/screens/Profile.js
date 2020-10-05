import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { listListings, deleteListing } from "../actions/listingActions"; 
import { Link } from "react-router-dom";
import "../index.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Profile(props) {
  const [name, setName] = useState("");
  const [searchWord] = useState("");
  const [category] = useState("");
  const [location] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [city, setCity] = useState("");
  const [created, setCreated] = useState("");
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
    alert("Successfully logged out");
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
      setUniversity(userInfo.university);
      setCity(userInfo.city);
      setProfilePicture(userInfo.profilePicture);
      setCreated(new Date(userInfo.created).toString().substring(15, 0));
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
            <div className="profile-heading">PROFILE</div>
            <img src={profilePicture} alt="profile" height="150" length="100" />
            <h2>
            
              {" "}
              <label for="name" value={name}>
                {userInfo.fname} {userInfo.sname}
              </label>
              
            </h2>
            <span>
             <Link to={"/account/editprofile/" + userInfo.studentid}> Edit Profile? </Link>
            </span> 
            <br></br> 
            <div className="profile-contents">
              <form className="profile-form">
                <label for="username" value={sellerId}>
                  <h4>Student ID:</h4> {sellerId}
                </label>
                <br></br>
                <label for="email" value={email}>
                  <h4>Email:</h4> {userInfo.email}
                </label>
                <br></br>
                <label for="university" value={university}>
                  <h4>University:</h4> {userInfo.university}
                </label>
                <br></br>
                <label for="city" value={city}>
                  <h4>City:</h4> {userInfo.city}
                </label>
                <br></br>
                <label for="created" value={created}>
                  <h4>Member since:</h4> {created}
                </label>
            
              </form>
           
           <div className="profileButtons">
              <button type="button" className="logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
            </div>
          </div>
          <div className="listingsContainer">
            <div className="profile-heading">ACTIVE LISTINGS</div>
            {loading ? (
              <div className="loading">
                <PropagateLoader size={20} color={"#123abc"} />
              </div>
            ) : error ? (
              <div className="error">
                Cannot fetch your listings at this time. Please try again soon.
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
              <div className="watchlist-message">
                {" "}
                <div> You currently dont have any listings. </div>
                <div> Click <Link to="/account/createlisting">Create listing</Link> to get started! </div>
              </div>
            )}
          </div>
          <div className="watchlistContainer">
            <div className="profile-heading">WATCHLIST <FontAwesomeIcon size="lg" icon={faEye} /></div>
            <div className="watchlist-message">
              You have not added any listings to your watchlist yet
            </div>
          </div>
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
