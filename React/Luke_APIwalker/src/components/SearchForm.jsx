import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SearchForm = (props) => {
  const [category, setCategory] = useState("people") // People is the default selection option
  const [id, setId] = useState(0)                    // Save the id from the use 
  const [newData, setNewData] = useState([])         // Save the getted data from useEffect before show it in the page
  // We will show it only when we click on the search button !!!
  const navigate = useNavigate();                    // We need this to change the URL  

  // The use Effect we works when the user change on category or id
  // It wil get the data and save them in the newData state 
  useEffect(() => {
    axios.get('https://swapi.dev/api/' + category + '/' + id)
      .then(response => {
        setNewData(response.data)
      })
      .catch(response => {
        setNewData({ Error: "These aren't the droids you're looking for " })
      })
  }, [category, id]);

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
    props.setShowData(newData)
    navigate("/" + category + "/" + id);
  }

  return (
    <>
      <div className='row'>
        <form onSubmit={callAPI}>
          <p className='col-2'>Search for:</p>
          <select className='mx-3 col-3' onChange={handleChangeInCategory} defaultValue="people">
            {/* I get the options from "https://swapi.dev/api/" */}
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
            <option value="vehicles">Vehicles</option>
            <option value="starships">Starships</option>
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