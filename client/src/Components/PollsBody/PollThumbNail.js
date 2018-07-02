import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PollThumbNail.css";

const PollThumbNail = ({ poll }) => {
  //   console.log(poll);
  return (
    <Link to={`/polls?${poll._id}`}>
      <div className="PollThumbNail">
        <div className="thumbnail-title">{poll.name}</div>
        <div className="thumbnail-option">{poll.options[0]}</div>
        <div className="thumbnail-option">{poll.options[1]}</div>
      </div>
    </Link>
  );
};

PollThumbNail.propTypes = {
  poll: PropTypes.object.isRequired
};

export default PollThumbNail;
