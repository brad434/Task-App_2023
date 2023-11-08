import React, { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import { v4 as uuidv4 } from 'uuid';
//initialize it. uuidv4 is a way to give generated digits with a number that is different from anyone else
uuidv4();


const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    console.log(todos)
  }


  return <div className="TodoWrapper">
    <TodoForm addTodo={addTodo} />
  </div>;
};

export default TodoWrapper;
