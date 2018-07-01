import React from "react";
import Input from "./../Input/Input";
import Button from "../Button/Button";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="Signup">
      <form action="/api/createuser" method="POST">
        <Input placeholder="UserName (used to log in)" name="username" />
        <Input placeholder="Password" type="password" name="password" />
        <Button text="Signup" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
