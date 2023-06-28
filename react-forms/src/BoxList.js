import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import { v4 as uuid } from "uuid";

const Boxlist = () => {
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {
    return (
      <div className="BoxList-boxContainer">
        {boxes.map((box) => (
          <Box
            key={box.code}
            code={box.code}
            height={box.height}
            width={box.width}
            backgroundColor={box.backgroundColor}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  };
  /** Add new Box */
  const addBox = (box) => {
    let newBox = { ...box, code: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  function handleDelete(code) {
    setBoxes((boxes) => boxes.filter((box) => box.code !== code));
  }

  return (
    <>
      <h1>Add a Box</h1>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </>
  );
};

export default Boxlist;
