import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listListings } from "../actions/listingActions";
import profileicon from "../images/profileicon.png";

function Home(props) {
  const [categorySortOrder, setCategorySortOrder] = useState("");
  const [locationSortOrder, setLocationSortOrder] = useState("");
  const searchWord = props.match.params.id ? props.match.params.id : "";
  const listingList = useSelector((state) => state.listingList);
  const [seller] = useState("");
  const { listings, loading, error } = listingList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listListings(searchWord, seller));
    return () => {};
    // eslint-disable-next-line
  }, [searchWord]);

  const setCategory = (category) => {
    setCategorySortOrder(category);
    dispatch(listListings(searchWord, category, locationSortOrder));
  };

  const setLocation = (location) => {
    setLocationSortOrder(location);
    dispatch(listListings(searchWord, categorySortOrder, location));
  };

  return (
    <>
      <div className="home-container">
        <div className="home-filter">
          <form>
            <select
              name="categorySortOrder"
              className="select-style"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value=""> All Categories </option>
              <option value="Antiques">Antiques</option>
              <option value="University Textbooks">University Textbooks</option>
              <option value="Books">Books</option>
              <option value="Clothing">Clothing</option>
              <option value="Sports Clothing">Sports Clothing</option>
              <option value="Shoes">Shoes</option>
              <option value="Jewellery and Watches">
                Jewellery and Watches
              </option>
              <option value="Accessories">Accessories</option>
              <option value="Computers">Computers</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Electronics">Electronics</option>
              <option value="Gaming consoles">Gaming consoles</option>
              <option value="Console and PC games">Console and PC games</option>
              <option value="Health and Beauty">Health and Beauty</option>
              <option value="Furniture">Furniture</option>
              <option value="Lamps and Lighting">Lamps and Lighting</option>
              <option value="Toys">Toys</option>
              <option value="Sports Equipments">Sports Equipments</option>
            </select>
            <select
              name="locationSortOrder"
              className="select-style"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            >
              <option value=""> All Locations </option>
              <option value="Auckland"> Auckland </option>
              <option value="Christchurch"> Christchurch </option>
              <option value="Dunedin"> Dunedin </option>
              <option value="Wellington"> Wellington </option>
            </select>
          </form>
        </div>
        {loading ? (
          <div className="loading">Loading listings ...</div>
        ) : error ? (
          <div className="error">
            {" "}
            {error} - Make sure you are running the server to fetch data ;)
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
            There are no listings available that match your request. Please
            check again later.{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
