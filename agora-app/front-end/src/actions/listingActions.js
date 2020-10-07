import axios from "axios";
import {
  LISTING_UPDATE_REQUEST,
  LISTING_UPDATE_SUCCESS,
  LISTING_UPDATE_FAIL,
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
  LISTING_DETAILS_FAIL,
  LISTING_DETAILS_SUCCESS,
  LISTING_DETAILS_REQUEST,
  CREATELISTING_REQUEST,
  CREATELISTING_FAIL,
  CREATELISTING_SUCCESS,
  LISTING_DELETE_REQUEST,
  LISTING_DELETE_SUCCESS,
  LISTING_DELETE_FAIL,
} from "../constants/listingConstants";

/*
 * ListingAction ListListings const. This method 
 * will fetch listings available filtered by
 * several parameters chosen by the user through a dispatch request.
 * Also used to fetch all user's active listings which gets displayed in their profile.
 * Params: searchWord, category, location, sellerId
 */
const listListings = (
  searchWord = "",
  category = "",
  location = "",
  sellerId = ""
) => async (dispatch) => {
  try {
    dispatch({ type: LISTING_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/listings?searchWord=" +
        searchWord +
        "&categorySortOrder=" +
        category +
        "&locationSortOrder=" +
        location +
        "&sellerIdListing=" +
        sellerId
    );
    dispatch({ type: LISTING_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LISTING_LIST_FAIL, payload: error.message });
  }
};

/*
 * ListingAction detailListing const. This method 
 * will fetch a particular listing's details to get displayed on the view listing page.
 * Params: listingId
 */
const detailListing = (listingId) => async (dispatch) => {
  try {
    dispatch({ type: LISTING_DETAILS_REQUEST, payload: listingId });
    const { data } = await axios.get("/api/listings/" + listingId);
    dispatch({ type: LISTING_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LISTING_DETAILS_FAIL, payload: error.message });
  }
};

/*
 * ListingAction listingUpdate const. This method 
 * will update a particular listing based on the listing ID in the parameters
 * Params: listingId
 */
const listingUpdate = (
  _id,
  name,
  description,
  image,
  category,
  price,
  city,
  university,
  brand,
  condition,
  seller,
  sellerId,
  sellerEmail
) => async (dispatch) => {
  dispatch({
    type: LISTING_UPDATE_REQUEST,
    payload: {
      _id,
      name,
      description,
      image,
      category,
      price,
      city,
      university,
      brand,
      condition,
      seller,
      sellerId,
      sellerEmail,
    },
  });
  try {
    const { data } = await axios.put("/api/listings/" + _id, {
      _id,
      name,
      description,
      image,
      category,
      price,
      city,
      university,
      brand,
      condition,
      seller,
      sellerId,
      sellerEmail,
    });
    dispatch({ type: LISTING_UPDATE_SUCCESS, payload: data });
    console.log("dispatch succesfull log");
  } catch (error) {
    dispatch({ type: LISTING_UPDATE_FAIL, payload: error.message });
  }
};

/*
 * ListingAction createListing const. This method 
 * will create a new listing by sending a dispatch request to the server
 * with all attributes and data in the payload.
 * Params: listing data
 */
const createListing = (
  name,
  description,
  image,
  category,
  price,
  city,
  university,
  brand,
  condition,
  seller,
  sellerId,
  sellerEmail,
  sellerProfilePicture
) => async (dispatch) => {
  dispatch({
    type: CREATELISTING_REQUEST,
    payload: {
      name,
      description,
      image,
      category,
      price,
      city,
      university,
      brand,
      condition,
      seller,
      sellerId,
      sellerEmail,
      sellerProfilePicture
    },
  });
  try {
    const { data } = await axios.post("/api/listings/create", {
      name,
      description,
      image,
      category,
      price,
      city,
      university,
      brand,
      condition,
      seller,
      sellerId,
      sellerEmail,
      sellerProfilePicture
    });
    dispatch({ type: CREATELISTING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATELISTING_FAIL, payload: error.message });
  }
};

/*
 * ListingAction deleteListing const. This method 
 * will delete a particular listing based on the listingID provided.
 * Params: listingId
 */
const deleteListing = (listingId) => async (dispatch) => {
  try {
    dispatch({ type: LISTING_DELETE_REQUEST, payload: listingId });
    const { data } = await axios.delete("/api/listings/" + listingId);
    dispatch({ type: LISTING_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: LISTING_DELETE_FAIL, payload: error.message });
  }
};

export {
  listListings,
  detailListing,
  createListing,
  deleteListing,
  listingUpdate,
};
