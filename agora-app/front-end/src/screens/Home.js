import React, { useState, useEffect } from 'react';
import data from '../data';

function Home (props) {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        
        return () => {
            //
        };
    }, [])

    return <div className="home-container">
        This is the home page
        <div className="listings">
            {data.listings.map(listing =>
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