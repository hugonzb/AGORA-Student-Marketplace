import Axios from "axios";
import Cookie from 'js-cookie';
import { 
    USER_SIGNUP_FAIL, 
    USER_SIGNUP_REQUEST, 
    USER_SIGNUP_SUCCESS, 
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_LOGOUT
} from "../constants/userConstants";
import { CREATELISTING_REQUEST, CREATELISTING_SUCCESS, CREATELISTING_FAIL } from "../constants/listingConstants";

const signUp = (studentid, fname, sname, username, password, email,
    dob, gender, university, street_address, city, postcode ) => async (dispatch) => {
        dispatch({
            type: USER_SIGNUP_REQUEST, payload: {studentid, fname, sname, username, password, email,
                dob, gender, university, street_address, city, postcode } });
    try {
        const { data } = await Axios.post("/api/users/signup", {studentid, fname, sname, username, password, email,
            dob, gender, university, street_address, city, postcode });
        dispatch({type:USER_SIGNUP_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: USER_SIGNUP_FAIL, payload: error.message});
    }
}
 
const signIn = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try{
        const { data } = await Axios.post("/api/users/signin", {email, password});
        dispatch({type:USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({type:USER_SIGNIN_FAIL, payload: error.message});
    }
} 

const logout = () => (dispatch) => {
    alert("Successfully logged out");
    Cookie.remove("userInfo");
    dispatch({type:USER_LOGOUT});
}

const createListing = (name, description, image, category, price,
    location, university, brand, seller, deliveryoption) => async (dispatch) => {
    dispatch({type: CREATELISTING_REQUEST, payload: {name, description, image, category, price,
        location, university, brand, seller, deliveryoption}});
        try{
            const {data} = await Axios.post("/listing/create", {name, description, image, category, price,
                location, university, brand, seller, deliveryoption});
                dispatch({type:CREATELISTING_SUCCESS, payload: data});
        }catch(error){
            dispatch({type: CREATELISTING_FAIL, payload: error.message});
        }
}

export { signUp, signIn, logout } 