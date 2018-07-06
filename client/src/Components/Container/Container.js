import React from "react";
import { Route } from "react-router-dom";
import CreatePollContainer from "./../CreatePollBody/CreatePollContainer";
import LoginContainer from "./../LoginBody/LoginContainer";
import SignupContainer from "./../SignupBody/SignupContainer";
import PollContainer from "./../PollBody/PollContainer";
import PollsContainer from "./../PollsBody/PollsContainer";
import MyPollsContainer from "./../MyPolls/MyPollsContainer";
import "./Container.css";

const Container = () => {
  return (
    <div>
      <div className="container">
        <Route exact path="/" component={CreatePollContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/mypolls" component={MyPollsContainer} />
        <Route path="/polls" component={PollContainer} />
        <Route path="/findpolls" component={PollsContainer} />
      </div>
    </div>
  );
};

export default Container;
