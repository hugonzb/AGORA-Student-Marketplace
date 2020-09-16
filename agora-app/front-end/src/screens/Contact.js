import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from '../actions/userActions';
import agoralogo from "../images/agoralogo.png";
import "../index.css";



  function Contact(props) {

   return (
    <div className="wrapper">
        <div className="contact_form">
            <div className="form-heading">
                
               
                   <img src={agoralogo} 
                   className="sign-up-logo" alt=""/>
               
                   <span> 
			       <h4>Contact Us</h4> 
                   Contact us about anything related to our company or services.
                   We'll do our best to get back to you as soon as possible.
                  
                   </span>
             
                
            </div>

            
       
        <form className="form_wrap" >
            
            <div className="input_grp">
                <div className="input_wrap"> 
                   <label>Full Name:</label>
                   <input
                   type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Enter Name"
                        required
                     
                      ></input>
                </div>
                
                <div className="input_wrap">
                      <label>Email:</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                        
                      ></input>
                 </div> 
                 </div>

                 <br></br>

                 <div className="input_wrap">
                      <label>Your Message:</label>
                      <input
                        type="text"
                        id="sname"
                        name="sname"
                        placeholder="How Can We help?"
                        required
                        
                      ></input>
                 </div>
               
                 
                 
                 </form> 
                 </div>
                 </div>
               
              
              
  );
}


export default Contact;
