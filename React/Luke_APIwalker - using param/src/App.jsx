import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchForm from './components/SearchForm'
import DisplayResult from './components/DisplayResult'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <SearchForm />
      <Routes>
        {/* Change the route according to the user input in the form */}
        <Route path="/:category/:id" element={<DisplayResult data={data} />} />
      </Routes>
    </>
  )
}

export default App
