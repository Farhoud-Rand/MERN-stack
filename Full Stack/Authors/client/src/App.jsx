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
import Detail from './views/Detail';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function App() {
  // This variable is used to check if the id matches one of the documents in the database
  // or not.
  const [loaded, setLoaded] = useState(false)
  const [author, setAuthor] = useState("")
  const navigate = useNavigate()

  const getAuthor = (id) => {
    axios.get('http://localhost:8000/api/author/' + id)
      .then(res => {
        setAuthor(res.data)
        // Set the loaded variable to "true" if the fetching of the author worked and the value for it is not null
        if (res.data)
          setLoaded(true)
      })
      .catch(err => {
        console.error(err)
      })
  }

  // This function is used to delete the author 
  // Add a direction paramater, because when function is called in the author detail we want
  // to navigate to the main page, and in the list page we want to stay on the same page
  const deleteAuthor = (authorId, direction) => {
    axios.delete('http://localhost:8000/api/author/' + authorId)
      .then(res => {
        navigate(direction)
      })
      .catch(err => {
        console.error(err)
      });
  }

  return (
    <>
      <Routes>
        <Route path="/authors" element={<Index deleteAuthor={deleteAuthor} />} />
        <Route path="/authors/new" element={<Create />} />
        <Route path="/author/:id/edit" element={<Update loaded={loaded} getAuthor={getAuthor} author={author} />} />
        <Route path='/author/details/:id' element={<Detail loaded={loaded} getAuthor={getAuthor} deleteAuthor={deleteAuthor} author={author} />} />
      </Routes>
    </>
  )
}

export default App