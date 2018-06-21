import React, { Component } from "react";
import "./App.css";
import "./cssreset.css";
import CreatePollForm from "./Components/NewPoll/CreatePollForm";

class App extends Component {
  render() {
    return (
      <div className="App">
          <CreatePollForm />
      </div>
    );
  }
}

export default App;
