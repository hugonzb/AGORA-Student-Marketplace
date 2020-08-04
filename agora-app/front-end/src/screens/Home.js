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
            //
        };
    }, [])

    return loading ? <div>Loading listings ...</div> : 
    error? <div> {error} - Make sure you are running the server to fetch data ;) </div> :
    <div className="home-container">
        This is the home page
        <div className="listings">
            {listings.map(listing =>
            <li>
                <div className="listing-container">
                    {listing.name}
                </div>
            </li>)
            }
        </div>
    </div>
}

export default Home;