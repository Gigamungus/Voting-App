const user = (
  state = {
    signedIn: false,
    signingIn: false,
    jwt: undefined,
    err: false,
    usernameInput: "",
    passwordInput: ""
  },
  action
) => {
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
    console.log(action.jwt)
      return Object.assign({}, state, {
        signedIn: true,
        signingIn: false,
        jwt: action.jwt,
        err: false
      });
    case "SIGNIN_FAIL":
    console.log(action.err)
      return Object.assign({}, state, {
        signedIn: false,
        signingIn: false,
        jwt: undefined,
        err: action.err
      });
    case "LOGOUT":
      return Object.assign({}, state, {
        signedIn: false,
        signingIn: false,
        jwt: undefined,
        err: false
      });
    case "USERNAME_INPUT":
      // console.log(action.input);
      return Object.assign({}, state, {
        usernameInput: action.input
      });
    case "PASSWORD_INPUT":
      // console.log(action.input)
      return Object.assign({}, state, { passwordInput: action.input });
    default:
      return state;
  }
};

export default user;
