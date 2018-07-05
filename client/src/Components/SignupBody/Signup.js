import React from "react";
import Input from "./../Input/Input";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Signup.css";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import { Redirect } from "react-router-dom";

const Signup = ({
  signupState,
  signupUsernameInput,
  signupPassword1Input,
  signupPassword2Input,
  createUser,
  passwordMismatch
}) => {
  let nameError;
  let passwordError;
  if (signupState.timeToRedirect) return <Redirect to="/login" />;
  if (signupState.nameTaken) nameError = "username taken";
  if (signupState.passwordError) passwordError = signupState.passwordError;
  // console.log(signupState);
  function submit(e) {
    e.preventDefault();
    let username = e.target[0].value;
    let password1 = e.target[1].value;
    let password2 = e.target[2].value;
    if (password1 !== password2) passwordMismatch();
    else {
      // console.log(username, password1)
      createUser(username, password1);
    }
  }
  // console.log(signup.signingUp);
  if (signupState.signingUp) return <LoadSpinner />;
  // console.log(signup);
  return (
    <div className="Signup">
      <form action="" onSubmit={submit}>
        <Input
          placeholder="UserName (used to log in)"
          name="username"
          value={signupState.usernameText}
          onChange={signupUsernameInput}
          errorMessage={nameError}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={signupState.password1Text}
          onChange={signupPassword1Input}
          errorMessage={passwordError}
        />
        <Input
          placeholder="confirm password"
          type="password"
          value={signupState.password2Text}
          onChange={signupPassword2Input}
        />
        <Button text="Signup" type="submit" />
        <div className="login-link">
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
      </form>
    </div>
  );
};

Signup.proptypes = {
  signup: PropTypes.object.isRequired,
  signupUsernameInput: PropTypes.func.isRequired,
  signupPassword1Input: PropTypes.func.isRequired,
  signupPassword2Input: PropTypes.func.isRequired
};

export default Signup;
