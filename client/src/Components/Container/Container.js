import React from "react";
import { Route } from "react-router-dom";
import CreatePollContainer from "./../CreatePollBody/CreatePollContainer";
import Login from "./../LoginBody/Login";
import Signup from "./../SignupBody/Signup";
import PollContainer from "./../PollBody/PollContainer";
import PollsContainer from "./../PollsBody/PollsContainer";
import "./Container.css";

const Container = () => {
  return (
    <div>
      <div className="container">
        <Route exact path="/" component={CreatePollContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/polls" component={PollContainer} />
        <Route path="/findpolls" component={PollsContainer} />
      </div>
    </div>
  );
};

export default Container;
