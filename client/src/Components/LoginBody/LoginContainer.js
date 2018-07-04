import { connect } from "react-redux";
import {
  signin,
  passwordInput,
  usernameInput
} from "./../../redux/actions/index";
import Login from "./Login";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signin: (username, password) => dispatch(signin(username, password)),
  passwordInput: e => dispatch(passwordInput(e)),
  usernameInput: e => dispatch(usernameInput(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
