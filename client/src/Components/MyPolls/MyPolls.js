import React, { Component } from "react";
import PropTypes from "prop-types";
import PollThumbNail from "./../PollsBody/PollThumbNail";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import "./MyPolls.css";

class MyPolls extends Component {
  getPollsIfNeeded = () => {
    if (
      this.props.signedIn &&
      this.props.jwt &&
      this.props.loading === false &&
      this.props.loaded === false
    ) {
      this.props.getPolls(this.props.jwt);
    }
  };
  componentWillUnmount = () => {
    this.props.reset();
  };
  render() {
    if (this.props.loading) return <LoadSpinner />;

    if (!this.props.signedIn)
      return (
        <div style={{ color: "white" }}>
          <a href="/login" style={{ color: "steelblue" }}>
            sign in
          </a>{" "}
          to view this content
        </div>
      );

    this.getPollsIfNeeded();
    return (
      <div className="Polls">
        {this.props.polls.map((poll, index) => (
          <PollThumbNail poll={poll} key={index} />
        ))}
      </div>
    );
  }
}

MyPolls.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  jwt: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  getPolls: PropTypes.func,
  polls: PropTypes.array,
  reset: PropTypes.func.isRequired
};

export default MyPolls;
