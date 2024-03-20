// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([{id: 1, name: "Task 1", complete: false}]) 
  return (
    <>
      <input type="text"/>
      <button>Add Task</button>
      <button>Clear Completed</button>
      <TodoList tasks={tasks} />
      <p>x tasks left</p>
    </>
  );
}

export default App;
