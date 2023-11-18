import React, { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo.jsx";
import EditTodoForm from "./EditTodoForm.jsx";
//initialize it. uuidv4 is a way to give generated digits with a number that is different from anyone else
uuidv4();


const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //Add the todo 
  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])

    console.log(todos)
  }

  // Completed task
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  //Delete Task
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //Edit the Task
  const editTodo = id => {
    //set todos in the state of editing by finding the index and setting its value to true
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todos, task, isEditing: !todo.isEditing } : todo))
  }


  return <div className="TodoWrapper">
    <h1>Task App 2023</h1>
    <TodoForm addTodo={addTodo} className="todoList" />
    {todos.map((todo, index) => (
      todo.isEditing ? (
        <EditTodoForm editTodo={editTask} task={todo} />
      ) : (
        <Todo key={index} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
      )
    ))}
  </div>;
};

export default TodoWrapper;
