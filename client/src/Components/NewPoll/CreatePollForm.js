import React, { Component } from "react";
import "./CreatePollForm.css";
import VotingOptions from "../VotingOptions/VotingOptions";
import Button from "./../Button/Button";
import Logo from "./../Logo/Logo";
import Input from "../Input/Input";

export default class CreatePollForm extends Component {
  test(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  }
  render() {
    return (
      <form
        className="create-poll-form"
        action="/api/newpoll"
      >
        <Input placeholder="Poll name" name="pollName" />
        <VotingOptions />
        <Button
          type="submit"
          text={
            <div>
              <p>create poll</p> <Logo />
            </div>
          }
        />
      </form>
    );
  }
}
