import React from 'react'
import Task from './Task'

export default function TodoList({tasks, toogleTask})
{
  return (
    <>
    <div>Task List</div>
    {tasks.map(task => {
        return <Task key={task.id} toogleTask={toogleTask} task={task}/>
    })}
    </>
    )
}
