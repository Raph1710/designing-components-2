// write button card here
//eslint-disable-next-line
import React from "react";

const buttonStyle = {
  padding: "10px 16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
};

const Button = ({ text, onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
