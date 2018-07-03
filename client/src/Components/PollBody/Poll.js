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
  castVote(id) {
    return () => {
      this.props.sendVote(id);
    };
  }
  componentWillMount() {
    this.props.poll.loaded = false;
  }
  componentDidUpdate() {
    // console.log(this.props.poll);
  }
  render() {
    // console.log(window.location);
    // console.log(this.props);
    this.getPollIfNeeded();
    // console.log(this.props.poll.poll.options);
    // console.log(this.props.location);
    const renderThis =
      this.props.poll.loaded === true ? (
        <div className="Poll">
          <p className="poll-name">{this.props.poll.poll.name}</p>
          {this.props.poll.poll.options.map((option, index) => {
            /* console.log(option); */
            return (
              <div key={index} className="poll-option">
                <Button
                  text={option.name}
                  onClick={this.castVote(option._id).bind(this)}
                />
                <p>{option.count}</p>
              </div>
            );
          })}
          <div className="spread-poll">
            <span>copy URL to clipboard</span>
            <CopyToClipBoard text={window.location.href} />
          </div>
        </div>
      ) : (
        <LoadSpinner />
      ); //rendering this if poll not yet loaded
    return <div>{renderThis}</div>;
  }
}

Poll.propTypes = {
  location: PropTypes.object.isRequired,
  poll: PropTypes.object.isRequired,
  fetchPoll: PropTypes.func.isRequired,
  sendVote: PropTypes.func.isRequired
};

export default Poll;
