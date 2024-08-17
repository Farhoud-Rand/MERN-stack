
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Index from './views/Index';
import Create from './views/Create';
import Status from './views/Status';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetchPlayers();
}, []);
  const fetchPlayers = () => {
    axios.get("http://localhost:8000/api/players")
        .then(res => {
            setPlayers(res.data);
            // setLoaded(true);
        })
        .catch(err => {
            console.error("Error fetching players:", err);
        });
}
  return (
    <>
    <div className="container">
      <div className="d-flex justify-content-start mt-5 mb-2">
          <span className='col-1'></span>
          <Link className='mx-2' to='/players/list'>Manage Player</Link>
          |
          <Link className='mx-2' to='/status/game/1'>Manage Player Status</Link>
      </div>
    </div>
      <Routes>
        <Route path='/players/list' element={<Index players ={players} setPlayers={setPlayers}/>} />
        <Route path="/players/addplayers" element={<Create fetchPlayers={fetchPlayers}/>} />
        <Route path="/status/game/:gameId" element={<Status players ={players}/>}></Route>
      </Routes>

    </>
  )
}

export default App
