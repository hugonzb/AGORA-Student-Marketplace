import React, { useEffect, useState } from "react";
import "../history.css";
import { useDispatch, useSelector } from "react-redux";
import { listListingCompletes, listListingPurchasedCompletes } from "../actions/listingCompleteActions";
import PropagateLoader from "react-spinners/PropagateLoader";


function History(props) {
  const listingComplete = useSelector((state) => state.listingComplete);
  const { listingCompletes, loading, error } = listingComplete;
  const listingPurchasedComplete = useSelector((state) => state.listingPurchasedComplete);
  const { listingPurchasedCompletes, loadingPurchased, errorPurchased } = listingPurchasedComplete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const [studentid] = useState(userInfo.studentid);

  useEffect(() => {
    dispatch(listListingCompletes(studentid));
    dispatch(listListingPurchasedCompletes(studentid));
    return () => {};
    // eslint-disable-next-line
  }, []);

 return (

<div>
   <div  className="HistoryTab">
   <h2>Account Trading History</h2>
   <h2>Signed in as {} </h2> 
  </div>

<div  className="hist-wrapper">
  <div  className="leftbar">
    <div  className="folderTab sub">
      <h3>Sold items </h3>
    </div>
    <div  className="borderBox">
      <ul  className="options-history">
      {loading ? (
              <div className="loading">
                <PropagateLoader size={20} color={"#123abc"} />
              </div>
            ) : error ? (
              <div className="error">
                {" "}
                {error} - 404 Server error: Server does not currently seem to be
                running.
              </div>
            ) : listingCompletes.length > 0 ? (
              <div className="listings">
                {listingCompletes.map((listing) => (
                  <li key={listing._id}>
                    <div className="history-listing">
                      <div className="history-listing-image">
                          <img
                            className="listing-image"
                            src={listing.listingImage}
                            alt="listing"
                          ></img>
                      </div>

                      <div className="history-listing-content">
                          <div className="listing-name">{listing.name}</div>
                          <div className="listing-price">
                            Sold Price: ${listing.listingPrice}
                          </div>
                          <div>
                            Name: {listing.listingName}
                          </div>
                          <div>
                            Buyer: {listing.buyerName}
                          </div>
                          <div>
                            Seller: {listing.sellerName}
                          </div>
                          <div>
                            Buyer Email: {listing.buyerEmail}
                          </div>
                          ADDRESS:
                          <div>
                            Street: {listing.buyerAddress}
                          </div>
                          <div>
                            City: {listing.buyerCity}
                          </div>
                          <div>
                            Region: {listing.buyerRegion}
                          </div>
                          <div>
                            Postcode: {listing.buyerPostcode}
                          </div>
                          <div>
                            Date Sold: {new Date(listing.createdAt).toString().substring(15, 0)}
                          </div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            ) : (
              <div>
                You have not sold any listings yet.
              </div>
            )}
        
      </ul>      
    </div>
  </div>
  
 
 <div  className="leftbar">
  <div  className="folderTab">
    <h3>Purchased items </h3>
  </div>
  <div  className="borderBox">   
    <ul  className="options-history">
    {loadingPurchased ? (
              <div className="loading">
                <PropagateLoader size={20} color={"#123abc"} />
              </div>
            ) : errorPurchased ? (
              <div className="error">
                {" "}
                {errorPurchased} - 404 Server error: Server does not currently seem to be
                running.
              </div>
            ) : listingPurchasedCompletes.length > 0 ? (
              <div className="listings">
                {listingPurchasedCompletes.map((listing) => (
                  <li key={listing._id}>
                    <div className="profile-listing">
                      <div className="profile-listing-image">
                          <img
                            className="listing-image"
                            src={listing.listingImage}
                            alt="listing"
                          ></img>
                      </div>

                      <div className="listing-content">
                          <div className="listing-name">{listing.name}</div>
                          <div className="listing-price">
                            Sold Price: ${listing.listingPrice}
                          </div>
                          <div>
                            Name: {listing.listingName}
                          </div>
                          <div>
                            Buyer: {listing.buyerName}
                          </div>
                          <div>
                            Seller: {listing.sellerName}
                          </div>
                          <div>
                            Seller Email: {listing.sellerEmail}
                          </div>
                          <div>
                            Date Purchased: {new Date(listing.createdAt).toString().substring(15, 0)}
                          </div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            ) : (
              <div>
                You have not purchased any listings yet.
              </div>
            )}
		</ul>        
      </div>
  </div>
</div>  
</div>

     
     
  );
}
 


export default History;
