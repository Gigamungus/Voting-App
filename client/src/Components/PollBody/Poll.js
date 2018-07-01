import React, { Component } from "react";
import PropTypes from "prop-types";

class Poll extends Component {
  getPollIfNeeded() {
    const id = this.props.location.search.split("?")[1];
    // console.log(id)
    if (this.props.polls.loading === false && this.props.polls.loaded === false)
      this.props.fetchPoll(id);
  }
  render() {
    // console.log(this.props);
    this.getPollIfNeeded();
    // console.log(this.props.polls.poll.options)

    const renderThis =
      this.props.polls.loaded === true ? (
        <div>
          <p>{this.props.polls.poll.name}</p>
          {this.props.polls.poll.options.map((option, index) => (
            <p key={index}>{option}</p>
          ))}
        </div>
      ) : (
        <div>loading</div>
      );

    return <div>{renderThis}</div>;
  }
}

Poll.propTypes = {
  location: PropTypes.object.isRequired,
  polls: PropTypes.object.isRequired,
  fetchPoll: PropTypes.func.isRequired
};

export default Poll;
