import { 
  LISTING_LIST_REQUEST, 
  LISTING_LIST_SUCCESS, 
  LISTING_LIST_FAIL 
} from "../constants/listingConstants";

function listingReducer(state = { listings: [] }, action) {
    switch (action.type) {
      case LISTING_LIST_REQUEST:
        return { loading: true, listings: [] };
      case LISTING_LIST_SUCCESS:
        return { loading: false, listings: action.payload };
      case LISTING_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

export { listingReducer }