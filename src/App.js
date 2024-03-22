// import logo from './logo.svg';
// import './App.css';

import React, { useState , useRef, useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoListApp.tasks'

function App() {
  const [tasks, setTasks] = useState([{id: 1, name: "Task 1", complete: false}]) 
  const taskRef = useRef();

  // Load tasks on refresh
  useEffect(()=> {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTasks) setTasks(storedTasks)
  }, [])
  
  // save tasks
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // handle checkbox value
  function toogleTask(id)
  {
    const newTaskList = [... tasks]
    const task = newTaskList.find(task => task.id === id)
    task.complete = !task.complete;
    setTasks(newTaskList)
  }

  // add new task to the array
  function handleAddTasks(e)
  {
    const name = taskRef.current.value
    if(name === '') return
    setTasks(previousTask => { return [... previousTask, {id: uuidv4(), name: name, complete: false}]})
    taskRef.current.value = null
    // console.log(name)
  }

  // clear completed tasks
  function handleClearList()
  {
    const newTaskList = tasks.filter(task => !task.complete)
    setTasks(newTaskList)
  }

  
  return (
    <>
      <input ref={taskRef} type="text"/>
      <button onClick={handleAddTasks}>Add Task</button>
      <button onClick={handleClearList}>Clear Completed</button>
      <TodoList tasks={tasks} toogleTask={toogleTask}/>
      <p> {tasks.filter(task => !task.complete).length} tasks left</p>
    </>
  );
}

export default App;
