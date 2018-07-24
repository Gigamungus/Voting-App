const defaultState = {
  usernameText: "",
  password1Text: "",
  password2Text: "",
  passwordError: "",
  signupNameBadLength: false,
  signingUp: false,
  nameTaken: false,
  timeToRedirect: false
};

const signup = (state = defaultState, action) => {
  switch (action.type) {
    case "RESET_SIGNUP_PAGE":
      return {
        usernameText: "",
        password1Text: "",
        password2Text: "",
        passwordError: "",
        signingUp: false,
        nameTaken: false,
        timeToRedirect: false
      };
    case "SIGNUP_NAME_BAD_LENGTH":
      // console.log("found");
      return Object.assign({}, state, {
        signupNameBadLength: true,
        nameTaken: false
      });
    case "SIGNUP_USERNAME_INPUT":
      return Object.assign({}, state, {
        usernameText: action.event.target.value
      });
    case "SIGNUP_PASSWORD_1_INPUT":
      return Object.assign({}, state, {
        password1Text: action.event.target.value
      });
    case "SIGNUP_PASSWORD_2_INPUT":
      return Object.assign({}, state, {
        password2Text: action.event.target.value
      });
    case "PASSWORD_MISMATCH":
      return Object.assign({}, state, {
        passwordError: "passwords must match"
      });
    case "SIGNUP_REQUEST":
      // console.log("here");
      return Object.assign({}, state, {
        signingUp: true,
        signupNameBadLength: false
      });
    case "SIGNUP_RESPONSE":
      return Object.assign({}, state, {
        signingUp: false,
        timeToRedirect: true,
        nameTaken: false,
        passwordError: false
      });
    case "SIGNUP_USERNAME_TAKEN":
      return Object.assign({}, state, { signingUp: false, nameTaken: true });
    default:
      return state;
  }
};

export default signup;
