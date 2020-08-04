import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home (props) {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/listings");
            setListings(data);
        }
        fetchData();
        return () => {
            //
        };
    }, [])

    return <div className="home-container">
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