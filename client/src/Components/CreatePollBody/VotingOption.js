import React from "react";
import Input from "./../Input/Input";
import Button from "./../Button/Button";
import PropTypes from "prop-types";

const VotingOption = ({ id, removeSelf }) => {
  return (
    <div className="VotingOption">
      <Input
        placeholder="Voting option"
        name="votingOption"
        autoComplete="off"
      />
      <Button
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
  removeSelf: PropTypes.func
};

export default VotingOption;
