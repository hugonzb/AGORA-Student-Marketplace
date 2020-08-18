import React from "react";

function ViewListing(props) {
	return (
		<div className="view-listing-container">
			<div className="view-listing-top"> 
				<div className="view-listing-image">
					Listing image is here.	
				</div>	
				<div className="listing-actions">
					Listing actions are here.	
				</div>	
			</div>
			<div className="listing-details">
				Listing information is here.	
			</div>
			<div className="listing-qa-container">
				Listing questions and answers.	
			</div>
		</div>
	);
}

export default ViewListing;