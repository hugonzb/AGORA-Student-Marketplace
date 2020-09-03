import axios from 'axios';
import { 
    LISTING_LIST_REQUEST, 
    LISTING_LIST_SUCCESS, 
    LISTING_LIST_FAIL, 
    LISTING_DETAILS_FAIL,
    LISTING_DETAILS_SUCCESS,
    LISTING_DETAILS_REQUEST
} from '../constants/listingConstants'; 

const listListings = (category='', location='') => async (dispatch) => { 
    try {
        dispatch({ type: LISTING_LIST_REQUEST });
        const { data } = await axios.get("/api/listings?category=" + category + "&location=" + location);
        dispatch({ type: LISTING_LIST_SUCCESS, payload: data });
    } 
    catch (error) {
        dispatch({ type: LISTING_LIST_FAIL, payload: error.message });
    }
}

const detailListing = (listingId) => async (dispatch) => {
    try{
        dispatch({ type: LISTING_DETAILS_REQUEST, payload: listingId });
        const { data } = await axios.get("/api/listings/" + listingId);
        dispatch( {type: LISTING_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: LISTING_DETAILS_FAIL, payload: error.message});
    }
}

export { listListings, detailListing };