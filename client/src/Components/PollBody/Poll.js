import React, { Component } from "react";
import PropTypes from "prop-types";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import VotingDataContainer from "./../VotingData/VotingDataContainer";
import "./Poll.css";
import Button from "../Button/Button";
import CopyToClipBoard from "../CopyToClipBoard/CopyToClipBoard";
import { Link } from "react-router-dom";
import openSocket from "socket.io-client";

class Poll extends Component {
  constructor(props) {
    // console.log("constructing");
    super(props);

    this.pollRef = React.createRef();
    const socketLocation =
      window.location.host === "localhost:3000"
        ? "http://localhost:5000"
        : "https://" + window.location.host;
    this.socket = openSocket(socketLocation);

    // this.socket.pollId = this.props.pollId;
    // console.log(this.socket);

    this.socket.on("votecast", data => {
      // console.log("found", data);
      this.props.incrementVoteCount(data.id);
    });
  }
  getPollIfNeeded() {
    const id = this.props.location.search.split("?")[1];
    // console.log(id, this.props.poll.loading, this.props.poll.loaded);
    // console.log(this.props.user.jwt);
    if (this.props.poll.loading === false && this.props.poll.loaded === false)
      this.props.fetchPoll(id, this.props.user.jwt);
  }
  castVote(id, sock) {
    return () => {
      // store.getState();
      // console.log(this.props.user);
      if (this.props.user.jwt) {
        this.props.sendVote(id, this.props.user.jwt, sock);
      }
    };
  }
  componentWillMount() {
    this.props.poll.loaded = false;
    // console.log(this.props.poll);
  }
  componentDidMount() {
    // console.log("found");
    this.setVotingDataWidthHelper = () => {
      // console.log("found");
      this.props.setVotingDataWidth(
        window.getComputedStyle(this.pollRef.current).width
      );
    };
    window.addEventListener("resize", this.setVotingDataWidthHelper);
  }
  componentWillUnmount() {
    this.socket.close();
    window.removeEventListener("resize", this.setVotingDataWidthHelper);
  }
  componentDidUpdate() {
    // console.log(this.props.votingDataWidth);
    if (
      this.props.poll.loaded &&
      window.getComputedStyle(this.pollRef.current).width !==
        this.props.votingDataWidth
    ) {
      // console.log(
      //   window.getComputedStyle(this.pollRef.current).width,
      //   window.getComputedStyle(this.pollRef.current).width !=
      //     this.props.setVotingDataWidth,
      //   this.props.votingDataWidth
      // );
      this.props.setVotingDataWidth(
        window.getComputedStyle(this.pollRef.current).width
      );
    }
  }

  render() {
    this.getPollIfNeeded();

    const userNotes = this.props.user.signedIn ? (
      this.props.poll.userVoted ? (
        <p>you have voted on this poll</p>
      ) : (
        ""
      )
    ) : (
      <p style={{ textAlign: "center" }}>
        you must be{" "}
        <Link to="/login">
          <span style={{ color: "steelblue" }}>signed in</span>
        </Link>{" "}
        to vote on this poll
      </p>
    );

    const renderThis =
      this.props.poll.loaded === true ? (
        <div className="Poll" ref={this.pollRef}>
          {userNotes}
          <p className="poll-name">{this.props.poll.poll.name}</p>
          {this.props.poll.poll.options.map((option, index) => {
            /* console.log(option); */
            return (
              <div key={index} className="poll-option">
                <Button
                  text={option.name}
                  onClick={this.castVote(option._id, this.socket).bind(this)}
                />
                <p>{option.count}</p>
              </div>
            );
          })}
          <div className="spread-poll">
            <span>copy URL to clipboard</span>
            <CopyToClipBoard text={window.location.href} />
          </div>
          <VotingDataContainer />
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
  sendVote: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  incrementVoteCount: PropTypes.func.isRequired,
  pollId: PropTypes.string,
  setVotingDataWidth: PropTypes.func
};

export default Poll;
