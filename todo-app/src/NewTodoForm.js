import React, { useState } from "react";

const NewTodoForm = ({ addTask }) => {
  const INITIAL_STATE = { todo: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo:</label>
      <input
        id="todo"
        name="todo"
        value={formData.todo}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default NewTodoForm;
