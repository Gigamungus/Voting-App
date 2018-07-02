import React from "react";
import PropTypes from "prop-types";

const PollThumbNail = ({ poll }) => {
  console.log(poll);
  return (
    <div>
      <div>{poll.name}</div>
      <div>{poll.options[0]}</div>
      <div>{poll.options[1]}</div>
    </div>
  );
};

PollThumbNail.propTypes = {
  poll: PropTypes.object.isRequired
};

export default PollThumbNail;
