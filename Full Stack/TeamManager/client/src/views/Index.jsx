import { useState, useEffect } from 'react'
import Box from '../components/Box'
import PlayerTable from '../components/PlayerTable'
import axios from 'axios'

const Index = (props) => {
    
    
    // const [loaded, setLoaded] = useState(false);


    // const handleAddPlayer = () => {
    //         fetchPlayers(); // Refresh the player list after adding a new player
    //     }

    const removeFromDom = playerId => {
        props.setPlayers(props.players.filter(player => player._id !== playerId));
    }

    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(res => {
                removeFromDom(playerId) // this function is used to remove the document from the DOM. 
                console.log("Hello")
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <Box>
                <PlayerTable players={props.players} delete={deletePlayer}></PlayerTable>
            </Box>
        </>
    )
}

export default Index