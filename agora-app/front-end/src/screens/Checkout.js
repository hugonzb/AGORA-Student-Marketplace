import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { detailListing, deleteListing  } from '../actions/listingActions';
import { createListingComplete } from '../actions/listingCompleteActions';
import PropagateLoader from "react-spinners/PropagateLoader";

    function Checkout(props) {
      const listingDetails = useSelector(state => state.listingDetails);
      const { listing, loading, error } = listingDetails;
      const dispatch = useDispatch(); 
      const userSignin = useSelector((state) => state.userSignin);
      const { userInfo } = userSignin;
      const [sellerStudentid, setSellerStudentid] = useState("");
      const [buyerStudentid, setBuyerStudentid] = useState("");
      const [sellerName, setSellerName] = useState("");
      const [buyerName, setBuyerName] = useState(userInfo.fname + " " + userInfo.sname);
      const [listingImage, setListingImage] = useState("");
      const [listingPrice, setListingPrice] = useState("");
      const [listingName, setListingName] = useState("");
      const [buyerAddress, setBuyerAddress] = useState("");
      const [buyerCity, setBuyerCity] = useState("");
      const [buyerPostcode, setBuyerPostcode] = useState("");
      const [buyerRegion, setBuyerRegion] = useState("");
      const [sellerEmail, setSellerEmail] = useState("");
      const [buyerEmail, setBuyerEmail] = useState(userInfo.email);

      useEffect(() => {
          dispatch(detailListing(props.match.params.id));
          return () => { 
          };
        // eslint-disable-next-line
      }, []);

      const setFields = (e) => {
        e.preventDefault();
        setBuyerStudentid(userInfo.studentid);
        setSellerStudentid(listing.sellerId);
        setListingImage(listing.image);
        setListingPrice(listing.price);
        setListingName(listing.name);
        setSellerName(listing.seller);
        setSellerEmail(listing.email);
      }
      const submitHandler = (e) => {
        e.preventDefault();
        if(listing){
          dispatch(
            createListingComplete(
              buyerStudentid,
              sellerStudentid,
              sellerName,
              buyerName,
              listingName,
              listingImage,
              listingPrice,
              buyerAddress,
              buyerCity,
              buyerRegion,
              buyerPostcode,
              sellerEmail,
              buyerEmail
            )
          );
        }
        dispatch(deleteListing(listing._id));
        props.history.push("/listingcomplete/confirmation");
      };
        
        return loading ? <div className="loading">
            <PropagateLoader
              size={20}
              color={"#123abc"}
            />
        </div> :
        error? <div className="error"> {error} </div> :
         <div className="checkout-container">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
 <h2 className="checkout-heading">Checkout Form</h2>
<p></p>
<div className="ch-row2">
<div className="col-25">
    <div className="ch-container">
      <div className="checkout-listing">
        <div className="checkout-listing-image-container">
          <img
            className="checkout-listing-image"
            src={listing.image}
            alt="listing"
          ></img>
        </div>
        <div className="checkout-listing-info">
          <li>
            <b>{listing.name}</b>
          </li>
          <li>
            Condition: {listing.condition}
          </li>
          <li>
            Brand: {listing.brand}
          </li>
          <li>
            Location: {listing.city}
          </li>
          <li>
            Seller: {listing.seller}
          </li>
        </div>  
      </div>
      <p>Pay<span className="price"><b>$ {listing.price}</b></span></p>
      <br></br>
      <p>Shipping<span className="shipping"><b>To Be Arranged</b></span></p>
      <br></br>
      <p>Contact<span className="seller-contact"><b>Revealed After Checkout</b></span></p>
    </div>
  </div>
  <div className="col-75">
    <div className="ch-container">
      <form onSubmit={submitHandler}>
      
        <div className="ch-row">
          <div className="col-50">
            <h3>Shipping Address</h3>
            <br></br>
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" defaultValue={userInfo.fname + " " + userInfo.sname} onChange={(e) => setBuyerName(e.target.value)}/>
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" defaultValue={userInfo.email} onChange={(e) => setBuyerEmail(e.target.value)}/>
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" required onInput={setFields} onChange={(e) => setBuyerAddress(e.target.value)}/>
            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" required onChange={(e) => setBuyerCity(e.target.value)}/>

            <div className="ch-row">
              <div className="col-70">
                <label htmlFor="state">Region</label>
                <input type="text" id="state" name="state" onChange={(e) => setBuyerRegion(e.target.value)}/>
              </div>
              <div className="col-60">
                <label htmlFor="zip">Post Code</label>
                <input type="text" id="zip" name="zip" onChange={(e) => setBuyerPostcode(e.target.value)}/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label htmlFor="warning" className="checkout-warning">YOU DO NOT NEED TO ENTER DETAILS AS THIS IS A DEMO. WE DO NOT RECORD ANYTHING YOU INPUT IN THESE FIELDS.</label>
            <div className="checkout-accepted-cards">Accepted Cards</div>
            <div className="icon-ch-container">
              <i className="fa fa-cc-visa" style={{color: "navy", marginRight:"10px"}}></i>
              <i className="fa fa-cc-amex" style={{color: "blue", marginRight:"10px"}}></i>
              <i className="fa fa-cc-mastercard" style={{color: "red"}}></i>
            </div>
            <label htmlFor="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="Full Name"/>
            <label htmlFor="ccnum">Credit Card Number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="XXXX-XXXX-XXXX-XXXX"/>
            <label htmlFor="expmonth">Bank</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="Bank"/>
            <div className="ch-row">
              <div className="col-70">
                <label htmlFor="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="MM/YY"/>
              </div>
              <div className="col-60">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="***"/>
              </div> 
            </div>
          </div>
          
        </div>
        <div className="listing-submit-buttons">
      <div>
      <Link to={"/listing/"+ listing._id}>
        <input type="submit" value="Cancel" className="ch-btn"/>
      </Link>
		  <input type="submit" value="Proceed" className="ch-btn-c"/>
      </div>
    </div>
      </form>
    </div>
  </div>
</div>
</div>              
    }

    export default Checkout;
    
