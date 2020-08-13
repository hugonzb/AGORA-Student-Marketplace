import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listListings } from '../actions/listingActions';


function Home (props) {
    const listingList = useSelector(state => state.listingList);
    const { listings, loading, error } = listingList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listListings());
        return () => {
        };
        // eslint-disable-next-line
    }, [])

    return loading ? <div className="loading">Loading listings ...</div> : 
    error? <div className="error"> {error} - Make sure you are running the server to fetch data ;) </div> :
    <div className="home-container">
        <div className="listings">
            {listings.map(listing =>
            <li>
                <div className="listing-container">
                    <div className="listing-image">
                    <img className="listing-image" src={listing.image} alt="listing"></img>
                    </div>
                    <div className="listing-content">
                        <div className="listing-name">{listing.name}</div>
                        <div>Category: {listing.category}</div>
                        <div>Price: ${listing.price}</div>
                        <div>Seller: {listing.seller}</div>
                    </div>
                </div> 
            </li>)
            }
        </div>
    </div>
}

export default Home;