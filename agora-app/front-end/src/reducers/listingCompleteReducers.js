const { CREATELISTINGCOMPLETE_REQUEST, CREATELISTINGCOMPLETE_SUCCESS, CREATELISTINGCOMPLETE_FAIL } = require("../constants/listingCompleteConstants");

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

export { createListingCompleteReducer }