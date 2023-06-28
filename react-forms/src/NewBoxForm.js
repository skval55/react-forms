import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    height: "",
    width: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "height" || name === "width") {
      value = Number(value);
      if (isNaN(value)) {
        value = "";
      }
    }
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form className="BoxForm" onSubmit={handleSubmit}>
      <label className="BoxForm-label" htmlFor="height">
        height:
      </label>
      <input
        className="BoxForm-input"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label className="BoxForm-label" htmlFor="width">
        width:
      </label>
      <input
        className="BoxForm-input"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label className="BoxForm-label" htmlFor="backgroundColor">
        Background Color:
      </label>
      <input
        className="BoxForm-input"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button className="BoxForm-button">Add a new box</button>
    </form>
  );
};

export default NewBoxForm;
