import React from "react";
import Input from "../Input/Input";
import "./Login.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Login = () => {
  return (
    <div className="Login">
      <form action="api/login" method="POST">
        <Input placeholder="Username" name="username" />
        <Input placeholder="Password" name="password" type="password" />
        <Button text="login" type="submit" />
      </form>
      <div className="signup-link">
        <Link to="/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
