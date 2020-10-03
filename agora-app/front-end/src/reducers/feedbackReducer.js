const { FEEDBACK_POST_FAIL, FEEDBACK_POST_REQUEST, FEEDBACK_POST_SUCCESS} = require("../constants/feedbackConstants");

function feedbackReducer(state = { feedback: [] }, action) {
    switch (action.type) {
      case FEEDBACK_POST_REQUEST:
        return { loading: true };
      case FEEDBACK_POST_SUCCESS:
        return { loading: false, feedback: action.payload };
      case FEEDBACK_POST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
}

export {feedbackReducer};