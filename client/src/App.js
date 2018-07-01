import "./cssreset.css";
import "./App.css";
import { Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import CreatePollContainer from "./Components/CreatePollBody/CreatePollContainer";
import Login from "./Components/LoginBody/Login";
import Signup from "./Components/SignupBody/Signup";
import PollContainer from "./Components/PollBody/PollContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" component={CreatePollContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/polls" component={PollContainer} />
        </div>
      </div>
    );
  }
}

export default App;
