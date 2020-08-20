import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailListing } from '../actions/listingActions';


function ViewListing(props) {
	const listingDetails = useSelector(state => state.listingDetails);
	const { listing, loading, error } = listingDetails;
	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(detailListing(props.match.params.id));
        return () => {
        };
    // eslint-disable-next-line
    }, []);
	return loading ? <div className="loading">Loading listings ...</div> : 
    error? <div className="error"> {error} - Make sure you are running the server to fetch data ;) </div> :
		<div className="view-listing-container">
				<div className="view-listing-image">
					<img className="listing-image" src={listing.image} alt="listing"></img>
				</div>	 
				<div className="view-listing-actions">
					Listing actions are here.	
				</div>	
			<div className="view-listing-details">
				Listing information is here.	
			</div>
			<div className="view-listing-qa-container">
				Listing questions and answers.	
			</div>
		</div>
}

export default ViewListing;