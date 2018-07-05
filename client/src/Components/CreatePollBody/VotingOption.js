import React from "react";
import Input from "./../Input/Input";
import Button from "./../Button/Button";
import PropTypes from "prop-types";

const VotingOption = ({ id, removeSelf, value, onChange }) => {
  return (
    <div className="VotingOption">
      <Input
        placeholder="Voting option"
        name="votingOption"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
      <Button
        type="button"
        text={
          <div>
            <i className="red fa fa-times" />
          </div>
        }
        onClick={removeSelf}
      />
    </div>
  );
};

VotingOption.propTypes = {
  id: PropTypes.number,
  removeSelf: PropTypes.func,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default VotingOption;
