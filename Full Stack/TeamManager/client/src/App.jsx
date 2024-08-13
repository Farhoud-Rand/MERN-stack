import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Index from './views/Index';
import Create from './views/Create';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/players/list' element={<Index />} />
        <Route element={<Create />} path="/players/addplayers" />
      </Routes>

    </>
  )
}

export default App
