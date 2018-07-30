import React, { Component } from "react";
import * as d3 from "d3";
import findAverage from "./../../functions/findAverage";
import findSTDDEV from "./../../functions/findSTDDEV";
import PropTypes from "prop-types";
import "./VotingData.css";

class VotingData extends Component {
  constructor(props) {
    super(props);
    this.selfRef = React.createRef();
  }
  componentDidUpdate() {
    // console.log(this.selfRef.current);
    // console.log(this.selfRef);
    // console.log("updated");
    // console.log(this.props);
    if (this.selfRef.current) this.selfRef.current.innerHTML = "";
    // console.log("component mounted");
    this.width = this.props.width.split("px")[0] || 400;
    // console.log(this.width);
    let height = this.props.height || 200;
    let data = this.props.poll.map(d => d.count);
    //   let data = this.test;
    let rectWidth = this.width / (data.length + 1);
    let padding = rectWidth / data.length;
    let avg = findAverage(data);
    let stdDev = findSTDDEV(data);
    let totalVotes = data.reduce((acc, data) => acc + data, 0);

    // let xScale = d3.scaleLinear();
    // console.log(findSTDDEV([1,1,1,1,1,10,1]))

    let xScale = d3.scaleLinear();
    xScale.domain([0, (rectWidth + padding) * data.length]);
    xScale.range([padding / 2, this.width]);

    let yScale = d3.scaleLinear();
    yScale.domain([0, d3.max(data)]);
    yScale.range([height, 20]);

    let svg = d3
      .select(".VotingData")
      .append("svg")
      .attr("width", this.width)
      .attr("height", height);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", () => xScale(rectWidth))
      .attr("x", (d, i) => xScale((rectWidth + padding) * i))
      .attr("height", d => height - yScale(d))
      .attr("y", d => yScale(d))
      .attr("fill", d => {
        const zScore = (d - avg) / stdDev;
        const red =
          zScore < 0 ? Math.min(255, Math.sqrt(10000 * Math.abs(zScore))) : 0;
        const green =
          zScore > 0 ? Math.min(255, Math.sqrt(10000 * Math.abs(zScore))) : 0;
        // const red = 99;
        // const green = 99;
        const blue = 0;
        // console.log(red);
        return `rgb(${red}, ${green}, ${blue})`;
      })
      .append("title")
      .text((d, i) => this.props.poll[i].name);

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => `${d} (${((d / totalVotes) * 100).toFixed(1)}  %)`)
      .attr("y", d => yScale(d) - 5)
      .attr("x", (d, i) => xScale((rectWidth + padding) * i))
      .attr("fill", "white");
  }
  componentDidMount() {
    if (this.props.width) this.forceUpdate();
  }

  render() {
    // console.log(this.props.poll);
    // console.log(d3);
    return this.props.userVoted ? (
      <div className="VotingData" ref={this.selfRef} />
    ) : (
      <div>you must vote on this poll to see the results</div>
    );
  }
}

VotingData.propTypes = {
  width: PropTypes.string,
  userVoted: PropTypes.bool
};

export default VotingData;
