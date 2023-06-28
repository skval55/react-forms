import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const [list, setList] = useState([]);

  const renderTodoList = () => {
    return (
      <ul>
        {list.map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            todo={task.todo}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    );
  };

  const addTask = (task) => {
    let newTask = { ...task, id: uuid() };
    console.log(newTask.id);
    setList((list) => [...list, newTask]);
  };

  function handleDelete(id) {
    setList((list) => list.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>To do list</h1>
      <NewTodoForm addTask={addTask} />
      {renderTodoList()}
    </>
  );
};

export default TodoList;
