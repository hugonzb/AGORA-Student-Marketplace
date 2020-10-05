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
   <h2 className="history-checkout-heading">Account Trading History</h2>
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
              <div className="history-listings">
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
                      <div className="history-listing-name">
                            {listing.listingName}
                      </div>
                      <div className="history-listing-content">
                          <div className="history-listing-price">
                            Sold Price: ${listing.listingPrice}
                          </div>
                          <div className="history-listing-details">
                            <div className="history-subheader">BUYER DETAILS</div>
                            <div>
                              {listing.buyerName}
                            </div>
                            <div>
                              {listing.buyerEmail}
                            </div>
                            <div className="history-buyer-address">
                              <div className="history-subheader">POSTAL ADDRESS</div>
                              <div>
                                {listing.buyerAddress}
                              </div>
                              <div>
                                {listing.buyerCity}
                              </div>
                              <div>
                                {listing.buyerRegion}
                              </div>
                              <div>
                                {listing.buyerPostcode}
                              </div>
                            </div>
                            <div className="history-date-sold">
                              {new Date(listing.createdAt).toString().substring(15, 0)}
                            </div>
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
              <div className="history-listings">
              {listingPurchasedCompletes.map((listing) => (
                <li key={listing._id}>
                  <div className="history-listing">
                    <div className="history-listing-image">
                        <img
                          className="listing-image"
                          src={listing.listingImage}
                          alt="listing"
                        ></img>
                    </div>
                    <div className="history-listing-name">
                          {listing.listingName}
                    </div>
                    <div className="history-listing-content">
                        <div className="history-listing-price">
                          Purchase Price: ${listing.listingPrice}
                        </div>
                        <div className="history-listing-details">
                          <div className="history-subheader">SELLER DETAILS</div>
                          <div>
                            {listing.sellerName}
                          </div>
                          <div>
                            {listing.sellerEmail}
                          </div>
                          <div className="history-buyer-address">
                            <div className="history-subheader">YOUR POSTAL ADDRESS</div>
                            <div>
                              {listing.buyerAddress}
                            </div>
                            <div>
                              {listing.buyerCity}
                            </div>
                            <div>
                              {listing.buyerRegion}
                            </div>
                            <div>
                              {listing.buyerPostcode}
                            </div>
                          </div>
                          <div className="history-date-sold">
                            {new Date(listing.createdAt).toString().substring(15, 0)}
                          </div>
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
