import React from "react";
//css
import "./index.css";

const CardColor = ({ color, deleteColor }) => {
  return (
    <div className="cardColor">
      <div
        className="color__box"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <span>{color}</span>
      <button className="button_color" onClick={deleteColor}>
        X
      </button>
    </div>
  );
};

export default CardColor;
