import React from "react";
//css
import "./index.css";

const TextBox = ({ color }) => {
  return (
    <div className="textBox">
      <span className="textBox__firstSpan">PANTONE</span>
      <span className="textBox__secondSpan">{color}</span>
    </div>
  );
};

export default TextBox;
