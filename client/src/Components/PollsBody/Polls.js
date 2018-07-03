import React, { Component } from "react";
import PollThumbNail from "./PollThumbNail";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import "./PollThumbNail.css";

class Polls extends Component {
  getPollsIfNeeded() {
    if (
      this.props.polls &&
      this.props.polls.loading === false &&
      this.props.polls.loaded === false
    ) {
      const name = this.props.location.search
        .split("?")
        .map(param => param.split("="))
        .filter(param => param[0] === "name")[0][1];
      this.props.getPolls(name);
    }
  }
  render() {
    // console.log(this.props);
    this.getPollsIfNeeded();
    // console.log(name);
    // console.log(this.props);
    let renderThis = "test";

    if (this.props.polls.loading === true) return <LoadSpinner />;
    else if (this.props.polls.loaded === true) {
      let polls = this.props.polls.polls;
      //   console.log(polls)
      if (polls.length === 0) renderThis = "no results found";
      else {
        renderThis = polls.map((poll, index) => (
          <PollThumbNail key={index} poll={poll} />
        ));
      }
    }

    return <div className="Polls">{renderThis}</div>;
  }
}

export default Polls;
