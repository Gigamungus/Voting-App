import React from "react";
import PropTypes from "prop-types";
import "./CreatePollForm.css";
import Button from "./../Button/Button";
import Input from "./../Input/Input";
import Logo from "./../Logo/Logo";
import VotingOption from "./VotingOption";

const CreatePollForm = ({ options, addOption, removeOption, resetOptions }) => {
  // console.log(addOption);
  const resetForm = () => {
    resetOptions();
    document.getElementsByClassName("new-poll-name")[0].children[0].value = "";
  };
  return (
    // <div className="VotingOptions">
    <form
      className="full-width create-poll-form"
      action="api/newpoll"
      method="POST"
    >
      <span className="new-poll-name">
        <Input placeholder="Poll name" name="pollName" autoComplete="off" />
      </span>
      {options.map(option => (
        <VotingOption
          key={option.id}
          id={option.id}
          removeSelf={function() {
            removeOption(option.id);
          }}
        />
      ))}
      <Button text="add voting option" onClick={addOption} type="button" />
      <Button
        type="submit"
        text={
          <div>
            <p>create poll &nbsp;</p> <Logo />
          </div>
        }
      />
      <Button text="reset form" onClick={resetForm} type="button" />
    </form>
    // </div>
  );
};

CreatePollForm.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ),
  addOption: PropTypes.func,
  removeOption: PropTypes.func,
  resetOptions: PropTypes.func
};

export default CreatePollForm;
