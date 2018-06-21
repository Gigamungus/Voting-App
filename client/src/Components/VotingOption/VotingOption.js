import React, { Component } from "react";
import Input from "./../Input/Input";
import Button from "./../Button/Button";
import "./VotingOption.css";

export default class VotingOption extends Component {
  removeOption() {
    let number = this.props.number;
    this.props.removeSelf(number);
  }
  render() {
    return (
      <div className="VotingOption">
        <Input placeholder="Voting option" name="votingOption" />
        <Button
          function={this.removeOption.bind(this)}
          text={
            <div>
              <i className="red fa fa-times" />
            </div>
          }
        />
      </div>
    );
  }
}
