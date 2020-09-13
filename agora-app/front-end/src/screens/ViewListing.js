import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailListing } from '../actions/listingActions';
import profileicon from "../images/profileicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


function ViewListing(props) {
	const [studentId, setStudentId] = useState("");
	const listingDetails = useSelector(state => state.listingDetails);
	const { listing, loading, error } = listingDetails;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const dispatch = useDispatch();


	useEffect(() => {
		if (userInfo) {
			setStudentId(userInfo.studentid);
		}
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
						<div className="view-listing-title">
							{listing.name}
						</div>
						{// eslint-disable-next-line 
						studentId != listing.sellerId ? 
						<div className="view-listing-buttons">
							<div className="view-listing-price">Asking Price: ${listing.price}</div>
								<Link to="/item/Checkout">
								<button className="buynow-button">
									<FontAwesomeIcon size="lg" icon={faShoppingCart}/> &nbsp;Purchase Item&nbsp;&nbsp;&nbsp;
								</button>
								</Link>
								<button className="addtowatchlist-button">
									<FontAwesomeIcon size="lg" icon={faStar}/> Add to Watchlist
								</button>
								
						</div>
						: 	<div className="view-listing-buttons">
								<div className="view-listing-price">Asking Price: ${listing.price}</div>
								<div className="view-listing-seller-message">
									<div className="view-listing-seller-message-text">
										You listed this item.
									</div>
								</div>
							</div>}
					</div>	
				<div className="view-listing-details">
					<div className="view-listing-details-title"> LISTING INFORMATION </div>
					<div className="view-listing-description-container"> 
						<div className="view-listing-description">
							{listing.description} 
						</div>
					</div>	
					<div className="view-listing-table">
						<table>
							<tr>
								<th>Seller</th>
								<th>Condition</th>
								<th>Brand</th>
								<th>Category</th>
								<th>Location</th>
							</tr>
							<tr>
								<td>						
									<div className="view-listing-user">
										<img src={profileicon} alt="profile"/>
										<div className="view-listing-sellername">{listing.seller}</div>
									</div>	
								</td>
								<td>{listing.condition}</td>
								<td>{listing.brand}</td>
								<td>{listing.category}</td>
								<td>{listing.city}</td>
							</tr>
						</table>				
					</div>
				</div>
				<div className="view-listing-details">
					<div className="view-listing-details-title"> QUESTIONS & ANSWERS </div>
					<div className="view-listing-qa-container">
						There are no questions posted yet.	
					</div>
				</div>
			</div>
}

export default ViewListing;