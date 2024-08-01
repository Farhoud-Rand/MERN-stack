import React, { useState, useEffect, useRef } from 'react'
import CompletedTask from './CompletedTask';

const TodoList = (props) => {
  // State to track completed tasks
  const [completedTasks, setCompletedTasks] = useState({});
  // A flag to see if the page is first time loaded or not
  const firstLoad = useRef(true)

  // Save data in local storage
  useEffect(() => {
    if (firstLoad.current) {
      // Only run this code on the first load
      firstLoad.current = false;

      // Load the list from localStorage
      const savedList = JSON.parse(localStorage.getItem('completedTasks'));
      if (savedList) {
        setCompletedTasks(savedList);
      }
    } else {
      // Save the completedTasks list to localStorage whenever it changes
      localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }
  }, [completedTasks]);

  
 // Function to handle changes in checkbox
  const handleCheckboxChange = (index) => (e) => {
    setCompletedTasks(() => ({
      ...completedTasks,
      [index]: e.target.checked,
    }));
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
              {!completedTasks[index] &&
                <li className="col-9">{task}</li>
              }
              {
                completedTasks[index] &&
                <CompletedTask className="col-9">{task}</CompletedTask>
              }
              <div className='col-1 mx-5'>
                <input type="checkbox" onChange={handleCheckboxChange(index)} checked={completedTasks[index] || false} />
              </div>
              <button onClick={removeTask(task)} className='btn btn-danger'>Delete</button>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList