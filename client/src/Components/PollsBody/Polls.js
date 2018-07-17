import React, { Component } from "react";
import PollThumbNail from "./PollThumbNail";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import "./PollThumbNail.css";

class Polls extends Component {
  render() {
    let renderThis = "try typing something in the search bar";
    // console.log(this.props);
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
