const { CREATELISTINGCOMPLETE_REQUEST, CREATELISTINGCOMPLETE_SUCCESS, CREATELISTINGCOMPLETE_FAIL, LISTINGCOMPLETE_REQUEST, LISTINGCOMPLETE_SUCCESS, LISTINGCOMPLETE_FAIL, LISTINGPURCHASEDCOMPLETE_REQUEST, LISTINGPURCHASEDCOMPLETE_SUCCESS, LISTINGPURCHASEDCOMPLETE_FAIL } = require("../constants/listingCompleteConstants");


function listingCompleteReducer(state = { listingCompletes: [] }, action) {
    switch (action.type) {
      case LISTINGCOMPLETE_REQUEST:
        return { loading: true };
      case LISTINGCOMPLETE_SUCCESS:
        return { loading: false, listingCompletes: action.payload };
      case LISTINGCOMPLETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
}

function listingPurchasedCompleteReducer(state = { listingPurchasedCompletes: [] }, action) {
    switch (action.type) {
      case LISTINGPURCHASEDCOMPLETE_REQUEST:
        return { loadingPurchased: true };
      case LISTINGPURCHASEDCOMPLETE_SUCCESS:
        return { loadingPurchased: false, listingPurchasedCompletes: action.payload };
      case LISTINGPURCHASEDCOMPLETE_FAIL:
        return { loadingPurchased: false, errorPurchased: action.payload };
      default:
        return state;
    }
}

function createListingCompleteReducer(state = {}, action){
    switch(action.type){
        case CREATELISTINGCOMPLETE_REQUEST:
            return {loading: true};
        case CREATELISTINGCOMPLETE_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case CREATELISTINGCOMPLETE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export { createListingCompleteReducer, listingCompleteReducer, listingPurchasedCompleteReducer }