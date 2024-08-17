import React from 'react'
import GamesStatus from '../components/GamesStatus'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PlayerTable from '../components/PlayerTable'

function Status(props) {
  const {gameId} = useParams()
  const [games, setGames] = useState([])
  const [status, setStatus] = useState({})

  
  useEffect(() => {
    getGames();
  },[]);

  useEffect(() => {
    getStatus();
  }, [gameId]);

  // This function is used to get all games 
  const getGames = () => {
    axios.get('http://localhost:8000/api/games')
      .then(res => {
        setGames(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // This function is used to connect a player with specific game 
  const createConnector = (status, playerId) => {
    axios.post('http://localhost:8000/api/connector/' + gameId + '/' + playerId, {status})
      .then(res => {
        console.log(res.data)
        getStatus()
      })
      .catch(err => {
        console.log(err)
      })
  }

  // This function is used to get status for each player in the game
  const getStatus = () => {
    console.log("Game ID ="+gameId)
    axios.get('http://localhost:8000/api/connector/'+gameId)
    .then(res => {
      console.log(res.data)
      setStatus(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  } 

  // This function is used to update the player status
  const updateStatus = (status, playerId) => {
    // app.patch('/api/connector/:gameId/:playerId'
    axios.patch('http://localhost:8000/api/connector/'+gameId+'/'+playerId, {status})
    .then(res => {
      console.log(res.data)
      getStatus()
    })
    .catch(err => {
      console.log(err)
    })
  }



  // const createStatus = player => {
  //   axios.post('http://localhost:8000/api/player', player)
  //     .then(res => {
  //       navigate(-1)
  //       console.log(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err.response.data.errors)
  //       const errorResponse = err.response.data.errors;
  //       setErrors(errorResponse);
  //     })
  // }
  return (
    <div>
      <div className='row '>
        {games.map((game, i) => (
          <p className="col-1 mx-auto " key={i}>
            <Link to={"/status/game/" + game.id}>Game {game.id}</Link>
          </p>
        ))}
      </div>

      <GamesStatus players={props.players} createConnector={createConnector} getStatus={getStatus} status={status} updateStatus={updateStatus}/>

    </div>
  )
}

export default Status