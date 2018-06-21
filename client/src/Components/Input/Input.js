import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  render() {
    return (
      <input
        className="Input"
        type="text"
        placeholder={this.props.placeholder}
        name={this.props.name}
      />
    );
  }
}
