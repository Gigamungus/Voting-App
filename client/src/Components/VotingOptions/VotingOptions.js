import React, { Component } from "react";
import "./VotingOptions.css";
import Button from "./../Button/Button";
import VotingOption from "../VotingOption/VotingOption";

export default class VotingOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        <VotingOption
          key={0}
          number={0}
          removeSelf={this.removeOption.bind(this)}
        />
      ],
      optionKey: 1
    };
  }
  addNewOption() {
    this.setState((prevState, props) => {
      let key = prevState.optionKey;
      return {
        options: [
          ...prevState.options,
          <VotingOption
            key={key}
            number={key}
            removeSelf={this.removeOption.bind(this)}
          />
        ],
        optionKey: key + 1
      };
    });
  }
  removeOption(key) {
    let index = this.state.options.reduce((acc, option, ind) => {
      return option.props.number === key ? ind : acc;
    }, 0);
    this.setState({
      options: this.state.options
        .slice(0, index)
        .concat(this.state.options.slice(index + 1))
    });
  }
  render() {
    return (
      <div className="VotingOptions">
        {this.state.options}

        <Button
          function={this.addNewOption.bind(this)}
          text={"add voting option"}
        />
      </div>
    );
  }
}
