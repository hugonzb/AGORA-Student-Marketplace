import React, { component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { listListings, deleteListing } from "../actions/listingActions";
import { Link } from "react-router-dom";
import "../index.css";
import profileicon from "../images/profileicon.png";
import PropTypes from 'prop-types'; 

return(

<div className="main_container">
)