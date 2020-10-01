import React, { useEffect, useState } from "react";
import "../history.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listListingCompletes } from "../actions/listingCompleteActions";
import PropagateLoader from "react-spinners/PropagateLoader";


function History(props) {
  const listingComplete = useSelector((state) => state.listingComplete);
  const { listingCompletes, loading, error } = listingComplete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const [studentid] = useState(userInfo.studentid);

  useEffect(() => {
    console.log(studentid)
    dispatch(listListingCompletes(studentid));
    return () => {};
    // eslint-disable-next-line
  }, []);

 return (

<div>
   <div  className="HistoryTab">
   <h2>Account Trading History</h2>
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
                            Asking Price: ${listing.listingPrice}
                          </div>
                          <div>
                            Buyer: {listing.buyerName}
                          </div>
                          <div>
                            Seller: {listing.sellerName}
                          </div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            ) : (
              <div>
                {" "}
                You currently dont have any listings. Click "create listing" to
                get started!{" "}
                <Link to="/account/createlisting">Create listing</Link>
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
     <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
        <li  className="hist-item"><a href="#">item 1</a></li>
		<div  className="separator"></div>
		</ul>        
      </div>
  </div>
</div>  
</div>

     
     
  );
}
 


export default History;
