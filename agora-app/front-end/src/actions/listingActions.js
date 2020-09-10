import axios from "axios";
import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
  LISTING_DETAILS_FAIL,
  LISTING_DETAILS_SUCCESS,
  LISTING_DETAILS_REQUEST,
  CREATELISTING_REQUEST,
  CREATELISTING_FAIL,
  CREATELISTING_SUCCESS,
  USER_LISTING_REQUEST,
  USER_LISTING_SUCCESS,
  USER_LISTING_FAIL,
} from "../constants/listingConstants";

const listListings = (searchWord = "", category = "", location = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: LISTING_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/listings?searchWord=" +
        searchWord +
        "&categorySortOrder=" +
        category +
        "&locationSortOrder=" +
        location
    );
    dispatch({ type: LISTING_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LISTING_LIST_FAIL, payload: error.message });
  }
};

const getUserListings = (studentID = "") => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.get("/api/listings?studentID=" + studentID);
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error.message });
  }
};

const detailListing = (listingId) => async (dispatch) => {
  try {
    dispatch({ type: LISTING_DETAILS_REQUEST, payload: listingId });
    const { data } = await axios.get("/api/listings/" + listingId);
    dispatch({ type: LISTING_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LISTING_DETAILS_FAIL, payload: error.message });
  }
};

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
  deliveryoption
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
      deliveryoption,
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
      deliveryoption,
    });
    dispatch({ type: CREATELISTING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATELISTING_FAIL, payload: error.message });
  }
};

export { listListings, detailListing, createListing };
