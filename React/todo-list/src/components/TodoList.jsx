import React, { useState, useEffect, useRef } from 'react'
import CompletedTask from './CompletedTask';

const TodoList = (props) => {
  // Function to handle changes in checkbox
  const handleCheckboxChange = (task) => () => {
    props.updateTask(task);
  };

  // Function to remove a task from the todo list 
  const removeTask = (task) => () => {
    props.removeTask(task);
  };

  return (
    <>
      <h2>Todo List</h2>
      <ul className="list-group my-5 p-5">
        {props.list.length > 0 && props.list.map((task, index) => {
          return (
            <div key={index} className='d-flex justify-content-center p-2'>
              {task.completed ? <CompletedTask className="col-9">{task.task}</CompletedTask>:<li className="col-9">{task.task}</li>}
                <input className="col-1 mx-5" type="checkbox" onChange={handleCheckboxChange(task)} checked={task.completed || false} />
              <button onClick={removeTask(task)} className='btn btn-danger'>Delete</button>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList