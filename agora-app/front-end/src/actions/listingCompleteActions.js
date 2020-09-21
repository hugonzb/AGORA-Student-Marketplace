import {
    CREATELISTINGCOMPLETE_REQUEST,
    CREATELISTINGCOMPLETE_FAIL,
    CREATELISTINGCOMPLETE_SUCCESS
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

  export { createListingComplete }