import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { listingReducer } from './reducers/listingReducer';
import {userSignupReducer} from './reducers/userReducers';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    listingList: listingReducer,
    userSignupReducer: userSignupReducer /* Could rename this var to something better not gonna lie */
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;