import React from "react";
import Input from "../Input/Input";
import "./Login.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

const Login = ({ user, signin, usernameInput, passwordInput }) => {
  // console.log(user);
  function test(e) {
    e.preventDefault();
    // console.log(e.target[0].value, e.target[1].value);
    signin(e.target[0].value, e.target[1].value);
  }
  if (user.signingIn) {
    return <LoadSpinner />;
  }
  let error;
  if (user.err) {
    error = user.err.error;
  }
  return (
    <div className="Login">
      <form action="" onSubmit={test}>
        <Input
          placeholder="Username"
          name="username"
          value={user.usernameInput}
          // value="qw"
          onChange={usernameInput}
          errorMessage={error}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={user.passwordInput}
          // value="qw"
          onChange={passwordInput}
        />
        <Button text="login" type="submit" />
      </form>
      <div className="signup-link">
        <Link to="/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  signin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  usernameInput: PropTypes.func.isRequired,
  passwordInput: PropTypes.func.isRequired
};

export default Login;
