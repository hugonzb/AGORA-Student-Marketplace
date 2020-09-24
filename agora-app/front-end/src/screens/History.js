import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { listListings, deleteListing } from "../actions/listingActions";
import { Link } from "react-router-dom";
import "../history.css";

function History(props) {
  const [name, setName] = useState("");
  const [searchWord] = useState("");
  const [category] = useState("");
  const [location] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [university, setUniversity] = useState("");
  const [city, setCity] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [sellerId] = useState(userInfo.studentid);
  const listingList = useSelector((state) => state.listingList);
  const { listings, loading, error } = listingList;
  const dispatch = useDispatch();
 


 return (
    <div className="wrapper">
        <div className="formWrap">
            <div className="form-heading">
            
                   <span> 
			       <h4>History</h4> 
                   Review your previous purchases and sales  
                   </span>
            
            </div>
                <div className="buyWrapper">

                </div>

                <div className="saleWrapper">

                </div> 

            {loading}
            {error && <div>Student ID or Email Address has been taken.</div>}
       
      
      </div>
      </div>
   
 
      
    
  );
}
 


export default History;
