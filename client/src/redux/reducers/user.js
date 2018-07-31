import cookieParser from "./../../functions/cookie-parser";

let jwt = cookieParser(document.cookie).user;

let initialState = {
  signedIn: Boolean(jwt),
  signingIn: false,
  jwt: jwt,
  err: false,
  usernameInput: "",
  passwordInput: "",
  locationBeforeLogin: undefined
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_REQUEST":
      // console.log("signin_request");
      return Object.assign({}, state, {
        signedIn: false,
        signingIn: true,
        jwt: undefined,
        err: false
      });
    case "SIGNIN_SUCCESS":
      // console.log(
      //   action.pollLocation === "/login",
      //   action.pollLocation == "/login"
      // );
      document.cookie = `user=${action.jwt.token}`;
      // console.log(action, state);
      let pollLocation =
        action.pollLocation === "/login" || action.pollLocation === "/signup"
          ? state.locationBeforeLogin
          : action.pollLocation;
      // console.log(pollLocation, action);
      return Object.assign({}, state, {
        signedIn: true,
        signingIn: false,
        jwt: action.jwt.token,
        err: false,
        usernameInput: "",
        passwordInput: "",
        locationBeforeLogin: pollLocation
      });
    case "SIGNIN_FAIL":
      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      return Object.assign({}, state, {
        signedIn: false,
        signingIn: false,
        jwt: undefined,
        err: action.err,
        usernameInput: "",
        passwordInput: ""
      });
    case "LOGOUT_USER":
      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      return Object.assign({}, state, {
        signedIn: false,
        signingIn: false,
        jwt: undefined,
        err: false
      });
    case "LOGIN_USERNAME_INPUT":
      // console.log(action.input);
      return Object.assign({}, state, {
        usernameInput: action.input
      });
    case "LOGIN_PASSWORD_INPUT":
      // console.log(action.input)
      return Object.assign({}, state, { passwordInput: action.input });
    default:
      return state;
  }
};

export default user;
