import Axios from "axios";
import Cookie from "js-cookie";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constants/userConstants";

/*
 * UserAction signUp const. This method will take all fields the user has entered in the sign up form and create
 * a dispatch request before posting it to the mongodb cloud database.
 * Params: all profile attributes which are required by the userSchema.
 */
const signUp = (
  studentid,
  fname,
  sname,
  password,
  email,
  region,
  gender,
  university,
  street_address,
  city,
  postcode,
  profilePicture
) => async (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
    payload: {
      studentid,
      fname,
      sname,
      password,
      email,
      region,
      gender,
      university,
      street_address,
      city,
      postcode,
      profilePicture,
    },
  });
  try {
    const { data } = await Axios.post("/api/users/signup", {
      studentid,
      fname,
      sname,
      password,
      email,
      region,
      gender,
      university,
      street_address,
      city,
      postcode,
      profilePicture,
    });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
};

/*
 * UserAction signIp const. This method will take the users entered email and password from the signin form
 * in the front end and post it to the database for validation. If correct a cookie will be set with the users
 * profile data, else a return message will occur saying the information entered is false.
 * Params: email, password.
 */
const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

/*
 * UserAction logout const. Method will logout the current user and remove all of the users data from
 * the current cookie.
 */
const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};

const removeUser = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

/*
 * UserAction updateUser const. This method will take all fields from the update profile form and create a
 * dispatch request to PUT the updated fields into the existing user object in the mongodb database.
 * Params: all profile attributes which are required by the userSchema that can be updated.
 */
const updateUser = (
  studentid,
  fname,
  sname,
  email,
  gender,
  university,
  street_address,
  city,
  postcode,
  region,
  profilePicture
) => async (dispatch) => {
  dispatch({
    type: USER_UPDATE_REQUEST,
    payload: {
      studentid,
      fname,
      sname,
      email,
      gender,
      university,
      street_address,
      city,
      postcode,
      region,
      profilePicture,
    },
  });
  try {
    const { data } = await Axios.put("/api/users/" + studentid, {
      studentid,
      fname,
      sname,
      email,
      gender,
      university,
      street_address,
      city,
      postcode,
      region,
      profilePicture,
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    console.log("dispatch succesfull log");
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
};

export { signUp, signIn, logout, updateUser };
