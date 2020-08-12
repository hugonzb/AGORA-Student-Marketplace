import { USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants";
/*import Cookie from 'js-cookie';*/

const { default: Axios } = require("axios");
//const { SSL_OP_COOKIE_EXCHANGE } = require("constants");

const signUp = (fname, mname, sname, username, password, email,
    dob, gender, university, street_address, city, postcode, date_created) => async (dispatch) => {
        dispatch({
            type: USER_SIGNUP_REQUEST, payload: {
                fname, mname, sname, username, password, email,
                dob, gender, university, street_address, city, postcode, date_created } });
    /* Debugging code here :-) */
    console.log(fname);
    try {
        const { data } = await Axios.post("/api/users/signup", {
            fname, mname, sname, username, password, email,
            dob, gender, university, street_address, city, postcode, date_created});
        dispatch({type:USER_SIGNUP_SUCCESS, payload: data});
        /*Cookie.set('userInfo', JSON.stringify(data)); Cookie is slightly buggy atm*/
    }catch(error){
        dispatch({type: USER_SIGNUP_FAIL, payload: error.message});
    }
}

export {signUp}