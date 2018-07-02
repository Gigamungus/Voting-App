import React, { Component } from "react";
import PropTypes from "prop-types";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

class Poll extends Component {
  getPollIfNeeded() {
    const id = this.props.location.search.split("?")[1];
    // console.log(id)
    if (this.props.poll.loading === false && this.props.poll.loaded === false)
      this.props.fetchPoll(id);
  }
  render() {
    // console.log(this.props);
    this.getPollIfNeeded();
    // console.log(this.props.poll.poll.options)

    const renderThis =
      this.props.poll.loaded === true ? (
        <div>
          <p>{this.props.poll.poll.name}</p>
          {this.props.poll.poll.options.map((option, index) => (
            <p key={index}>{option}</p>
          ))}
        </div>
      ) : (
        <LoadSpinner />
      );

    return <div>{renderThis}</div>;
  }
}

Poll.propTypes = {
  location: PropTypes.object.isRequired,
  poll: PropTypes.object.isRequired,
  fetchPoll: PropTypes.func.isRequired
};

export default Poll;
