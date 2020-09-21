const createListingComplete = (
    buyerStudentid,
    sellerStudentid,
    sellerName,
    buyerName,
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
      type: CREATELISTING_REQUEST,
      payload: {
        buyerStudentid,
        sellerStudentid,
        sellerName,
        buyerName,
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
        listingImage,
        listingPrice,
        buyerAddress,
        buyerCity,
        buyerRegion,
        buyerPostcode,
        sellerEmail,
        buyerEmail
      });
      dispatch({ type: CREATELISTING_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: CREATELISTING_FAIL, payload: error.message });
    }
  };