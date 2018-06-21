import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonType: this.props.type || "button"
    };
  }
  render() {
    return (
      <button
        className="Button"
        onClick={this.props.function}
        type={this.state.buttonType}
      >
        {this.props.text}
      </button>
    );
  }
}
