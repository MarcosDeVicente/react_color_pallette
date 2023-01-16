import React from "react";
import "./index.css";

const ExportedPalletes = ({ color }) => {
  return (
    <div className="pallettesColors__container">
      <div
        className="pallettesColors__color"
        style={{
          backgroundColor: color,
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default ExportedPalletes;
