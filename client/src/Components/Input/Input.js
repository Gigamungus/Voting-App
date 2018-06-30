import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ placeholder, name, autoComplete, value }) => {
  return (
    <input
      className="Input"
      type="text"
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      value={value}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.string
};

export default Input;
