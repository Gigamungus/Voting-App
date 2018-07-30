import "./Navbar.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  getPollsRequestHelper = form => {
    form.preventDefault();
    this.props.history.push("/findpolls");
    this.props.getPollsRequest(form.target[0].value);
  };

  savePageLocationHelper = () => {
    this.props.savePageLocation(
      window.location.pathname + window.location.search
    );
  };

  findPollsInputHelper = e => {
    this.props.findPollsInput(e.target.value);
  };
  render() {
    // console.log(this.props);
    let links = this.props.user.signedIn ? (
      <ul className="links">
        <li>
          <Link to="/">create poll</Link>
        </li>
        <li>
          <Link to="/mypolls">my polls</Link>
        </li>
        <li>
          <button
            onClick={this.props.logout}
            style={{ height: "100%", padding: "20px 0" }}
          >
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
          <Link to="/login" onClick={this.savePageLocationHelper.bind(this)}>
            sign in
          </Link>
        </li>
      </ul>
    );
    return (
      <div className="Navbar">
        {links}
        <form className="poll-search" onSubmit={this.getPollsRequestHelper}>
          <Input
            placeholder="find a poll"
            name="name"
            value={this.props.findPollsText}
            onChange={this.findPollsInputHelper}
          />
        </form>
      </div>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func,
  findPollsText: PropTypes.string.isRequired,
  findPollsInput: PropTypes.func.isRequired,
  savePageLocation: PropTypes.func
};

export default withRouter(Navbar);
