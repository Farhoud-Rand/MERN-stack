import { useState, useEffect } from 'react'
import Box from '../components/Box'
import PlayerTable from '../components/PlayerTable'
import axios from 'axios'

const Index = (props) => {
    const [players, setPlayers] = useState([]);
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchPlayers();
    }, []);

    //Execute the fetching inside a function instead of inside the useEffect.
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
    // const handleAddPlayer = () => {
    //         fetchPlayers(); // Refresh the player list after adding a new player
    //     }

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
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
                <PlayerTable players={players} delete={deletePlayer}></PlayerTable>
            </Box>
        </>
    )
}

export default Index