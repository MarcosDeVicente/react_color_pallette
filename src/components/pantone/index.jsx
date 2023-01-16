import React, { useState, useEffect } from "react";
//components
import ColorBox from "../colorBox/index";
import TextBox from "../textBox/index";
import CardColor from "../cardColor/index";
import ExportedPalletes from "../exportedPallettes/index";
//css
import "./index.css";

const Pantone = () => {
  const [randomColor, setRandomColor] = useState("#ddde85");
  const [pallette, setPallette] = useState([]);

  const [showExportedPallettes, setShowExportedPallettes] = useState(false);
  const [exportedPallettes, setExportedPallettes] = useState([]);

  const [errorMessage, setErrorMessage] = useState(false);

  const addNewRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor("#" + randomColor);
  };

  const addColorToPallette = (color) => {
    const newPalette = {
      id: Math.floor(Math.random() * 100),
      hex: color,
    };
    const alreadyExist = pallette.find((newColor) => {
      return newColor.hex === color ? true : false;
    });

    if (alreadyExist) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      setPallette((prevState) => [...prevState, newPalette]);
    }
  };

  const deleteColor = (id) => {
    const newPalette = pallette.filter((item) => item.id !== id);
    setPallette(newPalette);
  };

  const exportPallette = (pallette) => {
    setShowExportedPallettes(true);
    setExportedPallettes(pallette);
    setPallette([]);
  };

  //---------------------------------------------------------------- tags

  const exportButtonPallette =
    pallette.length === 4 ? (
      <button
        className="button random-color"
        onClick={() => exportPallette(pallette)}
      >
        EXPORT
      </button>
    ) : (
      ""
    );

  const firstButtonTags =
    pallette.length < 4 ? (
      <>
        <button
          className="button random-color"
          onClick={() => addNewRandomColor(randomColor)}
        >
          RANDOM
        </button>
        <button
          className="button add-color"
          onClick={() => addColorToPallette(randomColor)}
        >
          Add to pallette
        </button>
      </>
    ) : (
      ""
    );

  return (
    <>
      <div className="firstContainer">
        <div className="pantone">
          <ColorBox color={randomColor}></ColorBox>
          <div className="error">
            {errorMessage ? (
              <span>This color is already in the Pallete</span>
            ) : (
              ""
            )}
          </div>
          <TextBox color={randomColor}></TextBox>

          <div className="buttonBox">
            {firstButtonTags}
            {exportButtonPallette}
          </div>
        </div>
        {pallette.length > 0 ? (
          <div className="pallette">
            {pallette.map((item) => {
              return (
                <CardColor
                  key={item.id}
                  color={item.hex}
                  deleteColor={() => deleteColor(item.id)}
                ></CardColor>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      {showExportedPallettes ? (
        <div className="pallettesContainer">
          {exportedPallettes.map((item) => {
            return (
              <ExportedPalletes
                key={item.id}
                color={item.hex}
              ></ExportedPalletes>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Pantone;
