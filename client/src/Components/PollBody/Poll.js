import React, { Component } from "react";
import PropTypes from "prop-types";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import "./Poll.css";
import Button from "../Button/Button";

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
      this.props.poll.loaded === true ? ( //rednering this if poll is loaded successfully
        <div className="Poll">
          <p className="poll-name">{this.props.poll.poll.name}</p>
          {this.props.poll.poll.options.map((option, index) => (
            <div className="poll-option">
              <Button key={index} text={option} />
            </div>
          ))}
        </div>
      ) : (
        //rendering this if poll not yet loaded
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
