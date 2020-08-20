import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { listingReducer, listingDetailsReducer } from './reducers/listingReducer';
import {userSignupReducer, userSignInReducer} from './reducers/userReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {userSignin: {userInfo},};
const reducer = combineReducers({
    listingList: listingReducer,
    listingDetails: listingDetailsReducer,
    userSignup: userSignupReducer, 
    userSignin: userSignInReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;