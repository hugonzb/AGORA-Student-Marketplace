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

/*const userListings = (seller = "") => async (dispatch) => {
  try {
    dispatch({ type: LISTING_LIST_REQUEST });
    const { data } = await axios.get("/api/listings?seller=" + seller);
    dispatch({ type: LISTING_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LISTING_LIST_FAIL, payload: error.message });
  }
};*/

const detailListing = (listingId) => async (dispatch) => {
  try {
    dispatch({ type: LISTING_DETAILS_REQUEST, payload: listingId });
    const { data } = await axios.get("/api/listings/" + listingId);
    dispatch({ type: LISTING_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LISTING_DETAILS_FAIL, payload: error.message });
  }
};

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

//create listing
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

//delete listing action
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
