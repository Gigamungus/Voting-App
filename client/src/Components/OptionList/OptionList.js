import React from "react";
import PropTypes from "prop-types";
import "./OptionList.css";
import Button from "./../Button/Button";
import VotingOption from "../VotingOption/VotingOption";

const OptionList = ({ options, addOption, removeOption }) => {
  // console.log(addOption);
  return (
    <div className="VotingOptions">
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
    </div>
  );
};

OptionList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ),
  addOption: PropTypes.func,
  removeOption: PropTypes.func
};

export default OptionList;
