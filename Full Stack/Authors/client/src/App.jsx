import { useState } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Index from './views/Index';
import Create from './views/Create';
import Update from './views/Update';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/authors" element={<Index />} />
        <Route path="/authors/new" element={<Create />} />
        <Route path="/author/:id/edit" element={<Update />} />
      </Routes>
    </>
  )
}

export default App
