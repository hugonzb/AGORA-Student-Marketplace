const { default: Axios } = require("axios");
const { SSL_OP_COOKIE_EXCHANGE } = require("constants");

const signUp = (fname) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { fname } });
    /* Debugging code here :-) */
    console.log(fname);
    try {
        const {data} = await Axios.post("/api/users/signup", {fname});
        dispatch({type:USER_SIGNUP_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({type: USER_SIGNUP_FAIL, payload: error.message});
    }
}

export {signUp}