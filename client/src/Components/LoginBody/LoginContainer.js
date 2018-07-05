import { connect } from "react-redux";
import {
  signin,
  loginPasswordInput,
  loginUsernameInput
} from "./../../redux/actions/index";
import Login from "./Login";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signin: (username, password) => dispatch(signin(username, password)),
  passwordInput: e => dispatch(loginPasswordInput(e)),
  usernameInput: e => dispatch(loginUsernameInput(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
