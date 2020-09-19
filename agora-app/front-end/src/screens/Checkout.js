import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { detailListing } from '../actions/listingActions';


    function Checkout(props) {
      const listingDetails = useSelector(state => state.listingDetails);
      const { listing, loading, error } = listingDetails;
      const dispatch = useDispatch(); 
      const userSignin = useSelector((state) => state.userSignin);
      const { userInfo } = userSignin;

      
      useEffect(() => {
          dispatch(detailListing(props.match.params.id));
          return () => { 
          };
        // eslint-disable-next-line
      }, []);
        
        return loading ? <div className="loading">Loading listing ...</div> :
        error? <div className="error"> {error} </div> :

   
         <div className="checkout-container">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
 <h2 className="checkout-heading">Checkout Form</h2>
<p></p>
<div className="ch-row">
  <div className="col-75">
    <div className="ch-container">
      <form>
      
        <div className="ch-row">
          <div className="col-50">
            <h3>Shipping Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" defaultValue={userInfo.fname + " " + userInfo.sname}/>
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" defaultValue={userInfo.email}/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="Delivery address" required/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="City" required/>

            <div className="ch-row">
              <div className="col-70">
                <label for="state">Region</label>
                <input type="text" id="state" name="state" placeholder="Region"/>
              </div>
              <div className="col-60">
                <label for="zip">Post Code</label>
                <input type="text" id="zip" name="zip" placeholder="Postcode"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
			
            <label for="fname">Accepted Cards</label>
            <div className="icon-ch-container">
              <i className="fa fa-cc-visa" style={{color: "navy", marginRight:"10px"}}></i>
              <i className="fa fa-cc-amex" style={{color: "blue", marginRight:"10px"}}></i>
              <i className="fa fa-cc-mastercard" style={{color: "red"}}></i>
              
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="Full Name"/>
            <label for="ccnum">Credit Card Number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="XXXX-XXXX-XXXX-XXXX"/>
            <label for="expmonth">Bank</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="Bank"/>
            <div className="ch-row">
              <div className="col-70">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="MM/YY"/>
              </div>
              <div className="col-60">
                <label for="cvv">CVV</label>
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
    </div>
  </div>
</div>
            </div>              
    }

    export default Checkout;
    
