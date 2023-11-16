import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);

    // this will clear the input after its been submitted
    setValue("")
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder="Update your task" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">Update Task</button>

    </form>
  );
};

export default EditTodoForm;
