import React from "react";
import "./Box.css";

const Box = ({ code, handleDelete, height, width, backgroundColor }) => {
  const boxStyle = {
    backgroundColor: backgroundColor,
    height: height,
    width: width,
  };
  return (
    <div className="Box">
      <div index={code} className="Box-box" style={boxStyle}></div>
      <button className="Box-button" onClick={() => handleDelete(code)}>
        X
      </button>
    </div>
  );
};

export default Box;
