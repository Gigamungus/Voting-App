import React from "react";
import PropTypes from "prop-types";
import "./CopyToClipBoard.css";

const CopyToClipBoard = ({ text }) => {
  const copyToClipboard = str => {
    return () => {
      const el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    };
  };

  return (
    <button
      type="button"
      onClick={copyToClipboard(text)}
      className="CopyToClipBoard"
    >
      <i className="fas fa-bars" />
    </button>
  );
};

CopyToClipBoard.propTypes = {
  text: PropTypes.string.isRequired
};

export default CopyToClipBoard;
