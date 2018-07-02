import "./cssreset.css";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Container from "./Components/Container/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
