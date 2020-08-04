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

    return loading ? <div>Loading listings ...</div> : 
    error? <div> {error} - Make sure you are running the server to fetch data ;) </div> :
    <div className="home-container">
        This is the home page
        <div className="listings">
            {listings.map(listing =>
            <li>
                <div className="listing-container">
                    <div>Listing Image</div>
                    <div>{listing.name}</div>
                    <div>Category: {listing.category}</div>
                    <div>${listing.price}</div>
                </div>
            </li>)
            }
        </div>
    </div>
}

export default Home;