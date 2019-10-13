const initState = {
  isSignedIn: true,
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        isSignedIn: true,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return {
        ...state,
        isSignedIn: false,
        authError: null
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        isSignedIn: true,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
}

export default authReducer