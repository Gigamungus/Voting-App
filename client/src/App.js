import "./cssreset.css";
import "./App.css";
import React, { Component } from "react";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Footer from "./Components/Footer/Footer";
import Container from "./Components/Container/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
