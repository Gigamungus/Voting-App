import React from "react";
import "./Navbar.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ user, logout }) => {
  // console.log(user);

  let links = user.signedIn ? (
    <ul className="links">
      <li>
        <Link to="/">create poll</Link>
      </li>
      <li>
        <Link to="/login">my polls</Link>
      </li>
      <li>
        <button onClick={logout} style={{ height: "100%", padding: "20px 0" }}>
          <Link to="/">logout</Link>
        </button>
      </li>
    </ul>
  ) : (
    <ul className="links">
      <li>
        <Link to="/">create poll</Link>
      </li>
      <li>
        <Link to="/login">sign in</Link>
      </li>
    </ul>
  );

  return (
    <div className="Navbar">
      {links}
      <form className="poll-search" action="/findpolls" method="GET">
        <Input placeholder="find a poll" name="name" />
      </form>
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func
};

export default Navbar;
