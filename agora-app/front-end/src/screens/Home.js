import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { listListings } from '../actions/listingActions';
import profileicon from "../images/profileicon.png";


function Home (props) {
    const [categorySortOrder, setCategorySortOrder] = useState('');
    const [locationSortOrder, setLocationSortOrder] = useState('');
    const listingList = useSelector(state => state.listingList);
    const { listings, loading, error } = listingList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listListings());
        return () => {
        };
        // eslint-disable-next-line
    }, [])

    const submitHandler = (e) =>{
        e.preventDefault();
    }

    return loading ? <div className="loading">Loading listings ...</div> : 
    error? <div className="error"> {error} - Make sure you are running the server to fetch data ;)</div> :
    <div className="home-container">
            <form onSubmit={submitHandler}>
                <select name="categorySortOrder" className="select-style" onChange={(e) => {setCategorySortOrder(e.target.value)}}>
                    <option value=" "> All Categories </option>
                    <option value="health&fitness"> Health & Fitness </option>
                    <option value="books"> Books </option>
                    <option value="other"> Other </option>
                </select>
                <button className = "filter-button" type = "submit"></button>
            </form>
            <form onSubmit={submitHandler}>
                <select name="locationSortOrder" className="select-style" onChange={(e) => {setLocationSortOrder(e.target.value)}}>
                    <option value=" "> All Locations </option>
                    <option value="Auckland"> Auckland </option>
                    <option value="Dunedin"> Dunedin </option>
                    <option value="Christchurch"> Christchurch </option>
                </select>
                <button className = "filter-button" type = "submit"></button>
            </form>
        <div className="listings">
            {listings.map(listing =>
            <Link to={'/listing/' + listing._id}>
                <div className="listing-container">
                    <div className="listing-image">
                        <img className="listing-image" src={listing.image} alt="listing"></img>
                    </div>
                    <div className="listing-content">
                        <div className="listing-name">{listing.name}</div>
                        <div className="listing-price">Asking Price: ${listing.price}</div>
                        <div className="view-listing-user">
							<img src={profileicon} alt="profile"/> 
                            <div className="view-listing-sellername">{listing.seller}</div>
						</div>	
                    </div>
                </div> 
            </Link>)
            }
        </div>
    </div>
}

export default Home;