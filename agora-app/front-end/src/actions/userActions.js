import { USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants";
/*import Cookie from 'js-cookie';*/
import Axios from "axios";

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
 
export {signUp}