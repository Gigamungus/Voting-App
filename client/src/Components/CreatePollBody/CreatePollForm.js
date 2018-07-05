import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CreatePollForm.css";
import Button from "./../Button/Button";
import Input from "./../Input/Input";
import Logo from "./../Logo/Logo";
import VotingOption from "./VotingOption";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import { Redirect } from "react-router-dom";

class CreatePollForm extends Component {
  recieveTitleInput = e => {
    this.props.titleInput(e.target.value);
  };

  recieveOptionInput = id => {
    return function(e) {
      this.props.optionInput(id, e.target.value);
    };
  };

  createPollHelper = e => {
    if (this.props.signedIn && this.props.jwt) {
      // console.log("good");
      this.props.createPoll(e, this.props.jwt);
    } else this.props.createPoll(e);
  };

  componentWillUnmount = () => {
    this.props.reset();
  };

  render() {
    const err = this.props.nameError
      ? "name required"
      : this.props.optionsError
        ? "2 to 100 options required"
        : "";
    if (this.props.shouldRedirect && this.props.pollId) {
      const route = `/polls?${this.props.pollId}`;
      return <Redirect to={route} />;
    }

    if (this.props.processing) return <LoadSpinner />;

    return (
      // <div className="VotingOptions">
      <form
        className="full-width create-poll-form"
        action=""
        onSubmit={this.createPollHelper}
      >
        <span className="new-poll-name">
          <Input
            placeholder="Poll name"
            name="pollName"
            autoComplete="off"
            value={this.props.title}
            onChange={this.recieveTitleInput}
            errorMessage={err}
          />
        </span>
        {this.props.options.map(option => (
          <VotingOption
            key={option.id}
            id={option.id}
            value={option.text}
            onChange={this.recieveOptionInput(option.id).bind(this)}
            removeSelf={function() {
              this.props.removeOption(option.id);
            }.bind(this)}
          />
        ))}
        <Button
          text="add voting option"
          onClick={this.props.addOption}
          type="button"
        />
        <Button
          type="submit"
          text={
            <div>
              <p>create poll &nbsp;</p> <Logo />
            </div>
          }
        />
        <Button
          text="reset form"
          onClick={this.props.resetOptions}
          type="button"
        />
      </form>
      // </div>
    );
  }
}

CreatePollForm.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ),
  title: PropTypes.string.isRequired,
  optionInput: PropTypes.func.isRequired,
  titleInput: PropTypes.func.isRequired,
  addOption: PropTypes.func,
  removeOption: PropTypes.func,
  resetOptions: PropTypes.func,
  createPoll: PropTypes.func.isRequired,
  signedIn: PropTypes.bool.isRequired,
  jwt: PropTypes.string,
  processing: PropTypes.bool.isRequired,
  nameError: PropTypes.bool.isRequired,
  optionsError: PropTypes.bool.isRequired,
  shouldRedirect: PropTypes.bool.isRequired,
  pollId: PropTypes.string,
  reset: PropTypes.func.isRequired
};

export default CreatePollForm;
