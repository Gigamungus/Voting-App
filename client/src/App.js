import "./cssreset.css";
import "./App.css";
import { Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import CreatePollForm from "./Components/NewPoll/CreatePollForm";

class App extends Component {
  render() {
    return <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" component={CreatePollForm} />
          {/* <Route exact path="/login" component={Login} /> */}
        </div>
      </div>;
  }
}

export default App;
