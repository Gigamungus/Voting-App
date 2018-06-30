import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  type,
  text,
  onClick
}) => {
  // console.log(text);
  return (
    <button className="Button" onClick={onClick} type={type} value>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func
};

export default Button;
