import React from "react";
//css
import "./index.css";
const ColorBox = ({ color }) => {
  return (
    <div
      className="pantone__color"
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorBox;
