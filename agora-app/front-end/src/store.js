import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { listingReducer } from './reducers/listingReducer';
import {userReducer} from './reducers/userReducers';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    listingList: listingReducer,
    userSignUp: userReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;