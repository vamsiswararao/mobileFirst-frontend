// const initialState = {
//   user: null,
//   token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
//   loading: false,
//   error: null,
//   message: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'USER_SIGNUP_REQUEST':
//     case 'USER_SIGNIN_REQUEST':
//     caseFORGOT_PASSWORD_REQUEST':
//     case 'RESET_PASSWORD_REQUEST':
//       return { ...state, loading: true, error: null, message: null };
//     case 'USER_SIGNUP_SUCCESS':
//     case 'USER_SIGNIN_SUCCESS':
//       return { ...state, loading: false, token: action.payload.token, user: action.payload.user };
//     case 'FORGOT_PASSWORD_SUCCESS':
//     case 'RESET_PASSWORD_SUCCESS':
//       return { ...state, loading: false, message: action.payload.message };
//     case 'USER_SIGNUP_FAIL':
//     case 'USER_SIGNIN_FAIL':
//     case 'FORGOT_PASSWORD_FAIL':
//     case 'RESET_PASSWORD_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     case 'USER_LOGOUT':
//       return { ...state, user: null, token: null };
//     default:
//       return state;
//   }
// };

// export default authReducer;

import Cookies from "js-cookie";
const token = Cookies.get("token");

const initialState = {
  token: token ? token : null,
  error: null,
  message: null,
  loading: false,
  status: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SIGNUP_REQUEST":
    case "USER_LOGIN_REQUEST":
    case "FORGOT_PASSWORD_REQUEST":
    case "RESET_PASSWORD_REQUEST":
      return { ...state, loading: true };
    case "USER_LOGIN_FAIL":
    case "USER_SIGNUP_FAIL":
    case "FORGOT_PASSWORD_FAIL":
    case  "RESET_PASSWORD_FAIL" :
      return { ...state, loading: false, error: action.payload.message };
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return { ...state, loading: false, token: action.payload, error:null};
    case "LOGOUT":
      return { ...state, token: null };
    case "FORGOT_PASSWORD_SUCCESS":
    case "RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: true,
        error:null
      };
    default:
      return state;
  }
};

export default reducer;
