import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PollThumbNail.css";

const PollThumbNail = ({ poll }) => {
  console.log(poll);
  return (
    <Link to={`/polls?${poll._id}`}>
      <div>{poll.name}</div>
      <div>{poll.options[0]}</div>
      <div>{poll.options[1]}</div>
    </Link>
  );
};

PollThumbNail.propTypes = {
  poll: PropTypes.object.isRequired
};

export default PollThumbNail;
