import React from "react";

function ViewListing(props) {
	return (
		<div className="listing-container">
			<div classname="listing-top">
				<div classname="listing-image">
					Listing image is here.	
				</div>	
				<div classname="listing-actions">
					Listing actions are here.	
				</div>	
			</div>
			<div classname="listing-details">
				Listing information is here.	
			</div>
			<div classname="listing-qa-container">
				Listing questions and answers.	
			</div>
		</div>
	);
}

export default ViewListing;