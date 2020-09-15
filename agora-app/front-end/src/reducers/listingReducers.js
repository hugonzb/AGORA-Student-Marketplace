import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
  LISTING_DETAILS_REQUEST,
  LISTING_DETAILS_SUCCESS,
  LISTING_DETAILS_FAIL,
  LISTING_DELETE_REQUEST,
  LISTING_DELETE_SUCCESS,
  LISTING_DELETE_FAIL,
} from "../constants/listingConstants";

function listingReducer(state = { listings: [] }, action) {
  switch (action.type) {
    case LISTING_LIST_REQUEST:
      return { loading: true };
    case LISTING_LIST_SUCCESS:
      return { loading: false, listings: action.payload };
    case LISTING_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function listingDetailsReducer(state = { listing: {} }, action) {
  switch (action.type) {
    case LISTING_DETAILS_REQUEST:
      return { loading: true };
    case LISTING_DETAILS_SUCCESS:
      return { loading: false, listing: action.payload };
    case LISTING_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function listingDeleteReducer(state = { listing: {} }, action) {
  switch (action.type) {
    case LISTING_DELETE_REQUEST:
      return { loading: true };
    case LISTING_DELETE_SUCCESS:
      return { loading: false, listing: action.payload, success: true };
    case LISTING_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { listingReducer, listingDetailsReducer, listingDeleteReducer };
