import Input from "../Input/Input";
import "./Login.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";

class Login extends Component {
  render() {
    // console.log(user);
    if (this.props.user.signedIn) {
      console.log(this.props);
      return <Redirect to="/" />;
    }
    function test(e) {
      e.preventDefault();
      // console.log(e.target[0].value, e.target[1].value);
      this.props.signin(e.target[0].value, e.target[1].value);
    }
    if (this.props.user.signingIn) {
      return <LoadSpinner />;
    }
    let error;
    if (this.props.user.err) {
      error = this.props.user.err.error;
    }
    return (
      <div className="Login">
        <form action="" onSubmit={test.bind(this)}>
          <Input
            placeholder="Username"
            name="username"
            value={this.props.user.usernameInput}
            onChange={
              this.props.usernameInput // value="qw"
            }
            errorMessage={error}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={this.props.user.passwordInput}
            onChange={
              this.props.passwordInput // value="qw"
            }
          />
          <Button text="login" type="submit" />
        </form>
        <div className="signup-link">
          <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  signin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  usernameInput: PropTypes.func.isRequired,
  passwordInput: PropTypes.func.isRequired
};

export default Login;
