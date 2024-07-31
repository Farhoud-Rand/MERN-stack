import React , { useState, useEffect  } from 'react'
import axios from 'axios';


const Pokemon = () => {

    const [data, setData] = useState([]); 
    const [show, setShow] = useState(false); 

      useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setData(response.results))
    }, []);

// axios.get('http://www.example.com').then(response=>{
//     console.log(response);
// })



    const handleClick = () => {
        setShow(!show);
    }
  return (
    <>
    <button className="btn btn-danger p-3" onClick={ handleClick }>Get Data</button>
    {show &&
        <ul class="list-group my-3 p-3">
          {data.length > 0 && data.map((pokemonItem, index)=>{
                return (<li  key={index} class="list-group-item">{pokemonItem.name}</li>)
            })}
    </ul>
    }
    </>
    
  )
}

export default Pokemon