import React, { Component } from "react";
import Input from "./../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Signup.css";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  componentWillUnmount() {
    this.props.resetPage();
  }
  render() {
    // console.log(this.props);
    let nameError;
    let passwordError;
    if (this.props.isLoggedIn) return <Redirect to="/" />;
    if (this.props.signupState.timeToRedirect) return <Redirect to="/login" />;
    if (this.props.signupState.nameTaken) nameError = "username taken";
    if (this.props.nameBadLength)
      nameError = "name must be 2 to 16 characters";
    if (this.props.signupState.passwordError)
      passwordError = this.props.signupState.passwordError;
    // console.log(signupState);
    function submit(e) {
      e.preventDefault();
      let username = e.target[0].value;
      let password1 = e.target[1].value;
      let password2 = e.target[2].value;
      if (password1 !== password2) this.props.passwordMismatch();
      else {
        // console.log(username, password1)
        this.props.createUser(username, password1);
      }
    }
    // console.log(signup.signingUp);
    if (this.props.signupState.signingUp) return <LoadSpinner />;
    // console.log(signup);
    // console.log(this.props);
    return (
      <div className="Signup">
        <form action="" onSubmit={submit.bind(this)}>
          <Input
            placeholder="UserName (used to log in)"
            name="username"
            value={this.props.signupState.usernameText}
            onChange={this.props.signupUsernameInput}
            errorMessage={nameError}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={this.props.signupState.password1Text}
            onChange={this.props.signupPassword1Input}
            errorMessage={passwordError}
          />
          <Input
            placeholder="confirm password"
            type="password"
            value={this.props.signupState.password2Text}
            onChange={this.props.signupPassword2Input}
          />
          <Button text="Signup" type="submit" />
          <div className="login-link">
            <Link to="/login">Already have an account? Sign in</Link>
          </div>
        </form>
      </div>
    );
  }
}

Signup.proptypes = {
  nameTaken: PropTypes.bool.isRequired,
  nameBadLength: PropTypes.bool.isRequired,
  password1Text: PropTypes.string.isRequired,
  password2Text: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  signingUp: false,
  timeToRedirect: false,
  resetPage: PropTypes.func.isRequired,
  usernameText: "",
  signup: PropTypes.object.isRequired,
  signupUsernameInput: PropTypes.func.isRequired,
  signupPassword1Input: PropTypes.func.isRequired,
  signupPassword2Input: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  createUser: PropTypes.func.isRequired,
  passwordMismatch: PropTypes.bool.isRequired
};

export default Signup;
