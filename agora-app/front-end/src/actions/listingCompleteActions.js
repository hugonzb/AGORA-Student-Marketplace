import axios from "axios";

import {
    CREATELISTINGCOMPLETE_REQUEST,
    CREATELISTINGCOMPLETE_FAIL,
    CREATELISTINGCOMPLETE_SUCCESS,
    LISTINGCOMPLETE_REQUEST,
    LISTINGCOMPLETE_FAIL,
    LISTINGCOMPLETE_SUCCESS
} from "../constants/listingCompleteConstants";

  

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

  const listListingCompletes = (
    studentid = ""
  ) => async (dispatch) => {
    try {
      dispatch({ type: LISTINGCOMPLETE_REQUEST });
      const { data } = await axios.get(
        "/api/listingsComplete?sellerid=" +
          studentid
      );
      dispatch({ type: LISTINGCOMPLETE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LISTINGCOMPLETE_FAIL, payload: error.message });
    }
  };
  

  export { createListingComplete, listListingCompletes }