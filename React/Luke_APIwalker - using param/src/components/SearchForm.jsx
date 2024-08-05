import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SearchForm = (props) => {
  const [category, setCategory] = useState("people") // People is the default selection option
  const [id, setId] = useState(0)                    // Save the id from the use 

  // We will show it only when we click on the search button !!!
  const navigate = useNavigate();                    // We need this to change the URL  
  const [categories, setCategories] = useState([])    // Get selection options

  // Get categories for selection input 
  useEffect(() => {
    axios.get('https://swapi.dev/api/')
      .then(response => {
        setCategories(Object.keys(response.data))
      })
      .catch(response => {
        setCategories({ Error: "These aren't the droids you're looking for " })
      })
  }, []);

  // Function to handle changing in category
  const handleChangeInCategory = (e) => {
    setCategory(e.target.value)
  }

  // Function to handle changing in ID
  const handleChangeInId = (e) => {
    setId(e.target.value)
  }

  // Function to handle form submition, here we will change the data in the other components
  const callAPI = (e) => {
    e.preventDefault()
    navigate("/" + category + "/" + id);
  }

  return (
    <>
      <div className='row'>
        <form onSubmit={callAPI}>
          <p className='col-2'>Search for:</p>
          <select className='mx-3 col-3' onChange={handleChangeInCategory} defaultValue="people">
            {/* I get the options from "https://swapi.dev/api/" */}
            {categories.map((key, index) => (
              <option key={index} value={key}>{key}</option>
            ))}
          </select>
          <label className='col-2 mx-3'>ID:</label>
          <input type='number' className='col-2' onChange={handleChangeInId} value={id}></input>
          <input type='submit' className='btn btn-info col-1 mx-3 ' value="Search"></input>
        </form>
      </div>
    </>
  )
}

export default SearchForm