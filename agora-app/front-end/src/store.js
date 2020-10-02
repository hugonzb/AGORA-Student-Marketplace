import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  listingReducer,
  listingDetailsReducer,
} from "./reducers/listingReducers";
import {
  listingCompleteReducer,
  listingPurchasedCompleteReducer
} from "./reducers/listingCompleteReducers";
import { userSignupReducer, userSignInReducer } from "./reducers/userReducers";
import { listingDeleteReducer } from "./reducers/listingReducers";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = { userSignin: { userInfo } };
const reducer = combineReducers({
  listingList: listingReducer,
  listingDetails: listingDetailsReducer,
  userSignup: userSignupReducer,
  userSignin: userSignInReducer,
  listingDelete: listingDeleteReducer,
  listingComplete: listingCompleteReducer,
  listingPurchasedComplete: listingPurchasedCompleteReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
