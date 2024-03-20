import React from 'react'
import Task from './Task'

export default function TodoList({tasks})
{
  return (
    <>
    <div>Task List</div>
    {tasks.map(task => {
        return <Task key={task.id} task={task}/>
    })}
    </>
    )
}
