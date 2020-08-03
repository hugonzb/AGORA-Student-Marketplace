import React from 'react';
import data from '../data';

function Home (props) {
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