import React from 'react'

export default function Task({task, toogleTask}) {
  
  function handleCheckbox()
  {
    toogleTask(task.id)
  }
  
  return (
    <>
      <div>
        <label>
          {task.id}. 
          <input type='checkbox' checked={task.complete} onChange={handleCheckbox}></input>
          {task.name}
        </label>
        
      </div>
    </>
    
  )
}
