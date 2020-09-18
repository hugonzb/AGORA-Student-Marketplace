import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { detailListing } from '../actions/listingActions';


    function Checkout(props) {
      const listingDetails = useSelector(state => state.listingDetails);
      const { listing, loading, error } = listingDetails;
      const dispatch = useDispatch(); 

      
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
            <input type="text" id="fname" name="firstname" placeholder="Full Name"/>
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="E-mail"/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="111 11. Queens.st"/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="Auckland"/>

            <div className="ch-row">
              <div className="col-50">
                <label for="state">Region</label>
                <input type="text" id="state" name="state" placeholder="AKL"/>
              </div>
              <div className="col-50">
                <label for="zip">Post Code</label>
                <input type="text" id="zip" name="zip" placeholder="12345"/>
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
            <input type="text" id="cname" name="cardname" placeholder="Sam H Smith"/>
            <label for="ccnum">Credit Card Number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Bank</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="BNZ"/>
            <div className="ch-row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="MM/YY"/>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="***"/>
              </div>
            </div>
          </div>
          
        </div>
      </form>
    </div>
    <div className="listing-submit-buttons">
      <div>
      <Link to={"/listing/"+ listing._id}>
        <input type="submit" value="Cancel" className="ch-btn"/>
      </Link>
		  <input type="submit" value="Proceed" className="ch-btn-c"/>
      </div>
    </div>
  </div>
  <div className="col-25">
    <div className="ch-container">
      <h4>Product Image and price here </h4>
        
      <hr></hr>
      <p>Pay<span className="price"><b>$</b></span></p>
    </div>
  </div>
</div>
            </div>              
    }

    export default Checkout;
    
