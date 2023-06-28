import React from "react";

const Todo = ({ id, todo, handleDelete }) => {
  return (
    <li>
      {todo}
      <button onClick={() => handleDelete(id)}>X</button>
    </li>
  );
};

export default Todo;
