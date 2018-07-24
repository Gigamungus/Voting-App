import Signup from "./Signup";
import { connect } from "react-redux";
import {
  signupUsernameInput,
  signupPassword1Input,
  signupPassword2Input,
  createUser,
  passwordMismatch,
  resetSignupPage
} from "./../../redux/actions";

const mapStateToProps = state => ({
  signupState: state.signup,
  isLoggedIn: state.user.signedIn,
  nameBadLength: state.signup.signupNameBadLength
});

const mapDispatchToProps = dispatch => ({
  signupUsernameInput: e => dispatch(signupUsernameInput(e)),
  signupPassword1Input: e => dispatch(signupPassword1Input(e)),
  signupPassword2Input: e => dispatch(signupPassword2Input(e)),
  createUser: (username, password) => dispatch(createUser(username, password)),
  passwordMismatch: () => dispatch(passwordMismatch()),
  resetPage: () => dispatch(resetSignupPage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
