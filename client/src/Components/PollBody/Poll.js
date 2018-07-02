import React, { Component } from "react";
import PropTypes from "prop-types";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import "./Poll.css";
import Button from "../Button/Button";
import CopyToClipBoard from "../CopyToClipBoard/CopyToClipBoard";
// import { host } from "./../../../../config";

class Poll extends Component {
  getPollIfNeeded() {
    const id = this.props.location.search.split("?")[1];
    // console.log(id, this.props.poll.loading, this.props.poll.loaded);
    if (this.props.poll.loading === false && this.props.poll.loaded === false)
      this.props.fetchPoll(id);
  }
  componentWillMount() {
    this.props.poll.loaded = false;
  }
  render() {
    // console.log(window.location);
    // console.log(this.props);
    this.getPollIfNeeded();
    // console.log(this.props.poll.poll.options)
    // console.log(this.props.location);
    const renderThis =
      this.props.poll.loaded === true ? (
        <div className="Poll">
          <p className="poll-name">{this.props.poll.poll.name}</p>
          {this.props.poll.poll.options.map((option, index) => (
            <div key={index} className="poll-option">
              <Button text={option} />
            </div>
          ))}
          <div className="spread-poll">
            <span>copy URL to clipboard</span>
            <CopyToClipBoard text={window.location.href} />
          </div>
        </div> //rendering this if poll not yet loaded
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
