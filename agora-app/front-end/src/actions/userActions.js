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

const signUp = (
  studentid,
  fname,
  sname,
  password,
  email,
  dob,
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
      dob,
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
      dob,
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

const logout = () => (dispatch) => {
  alert("Successfully logged out");
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};

const removeUser = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

const updateUser = (
  studentid,
  fname,
  sname,
  password,
  email,
  dob,
  gender,
  university,
  street_address,
  city,
  postcode,
  profilePicture
) => async (dispatch) => {
  dispatch({
    type: USER_UPDATE_REQUEST,
    payload: {
      studentid,
      fname,
      sname,
      password,
      email,
      dob,
      gender,
      university,
      street_address,
      city,
      postcode,
      profilePicture,
    },
  });
  try {
    const { data } = await Axios.put("/api/users/" + studentid, {
      studentid,
      fname,
      sname,
      password,
      email,
      dob,
      gender,
      university,
      street_address,
      city,
      postcode,
      profilePicture,
    });
    dispatch({ type: USER_UPDATE_REQUEST, payload: data });
    console.log("dispatch succesfull log");
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
};

export { signUp, signIn, logout, removeUser, updateUser };
