import React from 'react'

export default function Task({task}) {
  return (
    <>
      <div>
        <label>
          {task.id}. 
          <input type='checkbox' value={false}></input>
          {task.name}
        </label>
        
      </div>
    </>
    
  )
}
