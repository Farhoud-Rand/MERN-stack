import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListForm from './components/ListForm';
import TodoList from './components/TodoList';

function App() {
  // Create an empty list in state to save tasks on it 
  const [list, setList] = useState([]);
  // A flag to see if the page is first time loaded or not
  const firstLoad = useRef(true)

  // Save data in local storage
  useEffect(() => {
    if (firstLoad.current) {
      // Only run this code on the first load
      firstLoad.current = false;

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
    setList([...list, newTask]);
  }

  // Remove a task from the list 
  const removeTask = (task) => {
    setList(list.filter(todo => todo != task))
  }

  return (
    <>
      <ListForm addTask={changeList} />
      <TodoList list={list} removeTask={removeTask} />
    </>
  )
}
export default App