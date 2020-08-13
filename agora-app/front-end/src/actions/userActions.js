import { USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";
/*import Cookie from 'js-cookie';*/
import Axios from "axios";
//const { SSL_OP_COOKIE_EXCHANGE } = require("constants");

const signUp = (fname, mname, sname, username, password, email,
    dob, gender, university, street_address, city, postcode ) => async (dispatch) => {
        dispatch({
            type: USER_SIGNUP_REQUEST, payload: {fname, mname, sname, username, password, email,
                dob, gender, university, street_address, city, postcode } });
    try {
        const { data } = await Axios.post("/api/users/signup", {fname, mname, sname, username, password, email,
            dob, gender, university, street_address, city, postcode });
        dispatch({type:USER_SIGNUP_SUCCESS, payload: data});
        /*Cookie.set('userInfo', JSON.stringify(data)); Cookie is slightly buggy atm*/
    }catch(error){
        dispatch({type: USER_SIGNUP_FAIL, payload: error.message});
    }
}
 

const signIn = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try{
        const {data} = await Axios.post("api/users/signin", {email, password});
        dispatch({type:USER_SIGNIN_SUCCESS, payload: data});
    }catch(error){
        dispatch({type:USER_SIGNIN_FAIL, payload: error.message});
    }
}

export {signUp}