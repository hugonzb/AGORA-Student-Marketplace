import axios from "axios";

import {
    CREATELISTINGCOMPLETE_REQUEST,
    CREATELISTINGCOMPLETE_FAIL,
    CREATELISTINGCOMPLETE_SUCCESS,
    LISTINGCOMPLETE_REQUEST,
    LISTINGCOMPLETE_FAIL,
    LISTINGCOMPLETE_SUCCESS, 
    LISTINGPURCHASEDCOMPLETE_REQUEST, 
    LISTINGPURCHASEDCOMPLETE_SUCCESS, 
    LISTINGPURCHASEDCOMPLETE_FAIL
} from "../constants/listingCompleteConstants";

/*
 * ListingCompleteAction createListingComplete const. This method 
 * will take the listing purchase, buyer and seller information and create
 * a dispatch request before posting it to the mongodb cloud database.
 * Params: all listingComplete attributes which are required by the listingCompleteSchema.
 */
const createListingComplete = (
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
  ) => async (dispatch) => {
    dispatch({
      type: CREATELISTINGCOMPLETE_REQUEST,
      payload: {
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
      },
    });
    try {
      const { data } = await axios.post("/api/listingsComplete/create", {
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
      });
      dispatch({ type: CREATELISTINGCOMPLETE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CREATELISTINGCOMPLETE_FAIL, payload: error.message });
    }
  };

/*
 * ListingCompleteAction ListListingCompletes const. This method 
 * will fetch listingCompletes sold by a student ID through a dispatch request.
 * Params: Student ID
 */
const listListingCompletes = (
    studentid = ""
  ) => async (dispatch) => {
    try {
      dispatch({ type: LISTINGCOMPLETE_REQUEST });
      const { data } = await axios.get(
        "/api/listingsComplete/sold?sellerid=" +
          studentid
      );
      dispatch({ type: LISTINGCOMPLETE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LISTINGCOMPLETE_FAIL, payload: error.message });
    }
};

/*
 * ListingCompleteAction ListListingCompletes const. This method 
 * will fetch listingCompletes purchased by a student ID through a dispatch request.
 * Params: Student ID
 */
const listListingPurchasedCompletes = (
    studentid = ""
  ) => async (dispatch) => {
    try {
      dispatch({ type: LISTINGPURCHASEDCOMPLETE_REQUEST });
      const { data } = await axios.get(
        "/api/listingsComplete/purchased?buyerid=" +
          studentid
      );
      dispatch({ type: LISTINGPURCHASEDCOMPLETE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LISTINGPURCHASEDCOMPLETE_FAIL, payload: error.message });
    }
  };
  
  export { createListingComplete, listListingCompletes, listListingPurchasedCompletes }