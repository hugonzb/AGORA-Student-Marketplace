const { CREATELISTINGCOMPLETE_REQUEST, CREATELISTINGCOMPLETE_SUCCESS, CREATELISTINGCOMPLETE_FAIL, LISTINGCOMPLETE_REQUEST, LISTINGCOMPLETE_SUCCESS, LISTINGCOMPLETE_FAIL } = require("../constants/listingCompleteConstants");


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
      case LISTINGCOMPLETE_REQUEST:
        return { loading: true };
      case LISTINGCOMPLETE_SUCCESS:
        return { loading: false, listingPurchasedCompletes: action.payload };
      case LISTINGCOMPLETE_FAIL:
        return { loading: false, error: action.payload };
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