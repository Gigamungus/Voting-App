import React, { Component } from "react";
import "./Navbar.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul className="links">
          <li>
            <Link to="/">create poll</Link>
          </li>
          <li>
            <Link to="/login">sign in</Link>
          </li>
        </ul>
        <form action="">
          <Input placeholder="find a poll" />
        </form>
      </div>
    );
  }
}
