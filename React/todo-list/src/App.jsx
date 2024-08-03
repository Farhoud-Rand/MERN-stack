import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListForm from './components/ListForm';
import TodoList from './components/TodoList';

function App() {
  // Create an empty list in state to save tasks on it 
  const [list, setList] = useState([]);
  // A flag to see if the page is first time loaded or not
  const [firstLoad, setFirstLoad] = useState(true)

  // Save data in local storage
  useEffect(() => {
    if (firstLoad) {
      // Only run this code on the first load
      setFirstLoad(false);

      // Load the list from localStorage
      const savedList = JSON.parse(localStorage.getItem('list'));
      if (savedList) {
        setList(savedList);
      }
    } else {
      // Save the list to localStorage whenever it changes
      localStorage.setItem('list', JSON.stringify(list));
    }
  }, [list]);

  // Function to add new task to the list
  const changeList = (newTask) => {
    // const task = { task: newTask, completed: false }
    setList([...list, { task: newTask, completed: false }]);
  }

  // Remove a task from the list 
  const removeTask = (task) => {
    setList(list.filter(todo => todo !== task))
  }

  // Function to update the task completion 
  const updateTask = (taskToUpdate) => {
    // Find the task to update
    const updatedTasks = list.map(task =>
      task === taskToUpdate ? { ...task, completed: !task.completed } : task
    );
    setList(updatedTasks);
  }

  return (
    <>
      <ListForm addTask={changeList} />
      <TodoList list={list} removeTask={removeTask} updateTask={updateTask} />
    </>
  )
}
export default App