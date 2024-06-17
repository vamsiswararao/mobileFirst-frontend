import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "https://mobilefirst-server.onrender.com/api/";

export const setToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});

export const clearToken = () => ({
  type: "CLEAR_TOKEN",
});

export const signupUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_SIGNUP_REQUEST" });
    const res = await axios.post(API_URL +"auth/signup", {
      userData,
    });
    Cookies.set("token", res.data.token, { expires: 7 });
    dispatch({ type: "SIGNUP_SUCCESS", payload: res.data.token });
  } catch (err) {
    console.log(err.response.data)
    dispatch({ type: "USER_SIGNUP_FAIL", payload: err.response.data });
    console.log(err.response);
  }
};



export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const res = await axios.post(API_URL +"auth/login", {
      userData,
    });
    Cookies.set("token", res.data.token, { expires: 7 });
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.token });
  } catch (err) {
    console.log(err)
    dispatch({ type: "USER_LOGIN_FAIL", payload: err.response.data });
    console.log(err.response.data);
  }
};

export const forgotPassword = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
    const response = await axios.post(API_URL + "users/forgot-password", {
      userData,
    });
    dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "FORGOT_PASSWORD_FAIL", payload: err.response.data });
    console.log(err);
  }
};

export const resetPassword =
  ({ token, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "RESET_PASSWORD_REQUEST" });
      const response = await axios.post(API_URL + "users/reset-password", {
        token,
        password,
      });
      console.log(response.data);
      dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "RESET_PASSWORD_FAIL", payload: err.response.data });
      console.log(err);
    }
  };

export const logout = () => (dispatch) => {
  Cookies.remove("token");
  dispatch({ type: "LOGOUT" });
};
