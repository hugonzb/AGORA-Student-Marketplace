
import React, { useEffect, useState } from 'react';
import visa_logo from "../images/visa_logo.png";
import mastercard_logo from "../images/mastercard_logo.png";
import cash from "../images/cash.png";


    function Checkout(props) {
        
        return(
            
         <div className="checkout-container-body">
         <div className="checkout-panel"> 
                <div className="panel-body">        
                <div className="title">
                <h2>Checkout Form</h2>
                </div>
 

    <div className="payment-method">
      <label for="card" className="method card">
        <div className="card-logos">
          <img src={visa_logo}/>
         <img src={mastercard_logo}/>
        </div>
 
        <div className="radio-input">
          <input id="card" type="radio" name="payment"/>
          Pay with credit card
        </div>
      </label>
 
      <label for="cash" className="method cash">
          <div className="container-cash">
        <img src={cash}/></div>
        <div className="radio-input">
          <input id="cash" type="radio" name="payment"/>
          Pay with Cash
        </div>
      </label>
    </div>
 
    <div className="input-fields">
      <div className="column-1">
        <label for="cardholder">Cardholder's Name</label>
        <input type="text" id="cardholder" />
 
        <div className="small-inputs">
          <div>
            <label for="date">Expiry Date</label>
            <input type="text" id="date" placeholder="MM / YY" />
          </div>
 
          <div>
            <label for="verification">CVV / CVC *</label>
            <input type="password" id="verification"/>
          </div>
        </div>
 
      </div>
      <div className="column-2">
        <label for="cardnumber">Card Number</label>
        <input type="text" id="cardnumber"/>
 
        <span className="info">* CVV or CVC is a unique security code found at the back of the card .</span>
      </div>
    </div>
  </div>
   <div className="panel-footer">
    <button className="btnc back-btn">Cancel</button>
    <button className="btnc next-btn">Proceed</button>
   </div>        
</div> 
            </div>              
        );
    }

    export default Checkout;
    
