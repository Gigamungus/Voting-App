import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({
  placeholder,
  name,
  autoComplete = "off",
  value,
  errorMessage
}) => {
  const errorStyle = {
    display: errorMessage ? "block" : "none"
  };
  return (
    <div className="Input">
      <input
        className="Input-input"
        type="text"
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        value={value}
      />
      <div style={errorStyle} className="red error-message">
        {errorMessage}
      </div>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string
};

export default Input;
