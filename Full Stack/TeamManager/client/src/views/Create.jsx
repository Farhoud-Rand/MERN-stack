import {useState} from 'react'
import Box from '../components/Box'
import PlayerForm from '../components/PlayerForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()
    
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/player', player)
          .then(res => {
            navigate(-1)
            console.log(res.data)
          })
          .catch(err => {
            console.log(err.response.data.errors)
            const errorResponse = err.response.data.errors;
            setErrors(errorResponse);
          })
      }
    
    return (
        <>
            <Box>
                <PlayerForm errors={errors} onSubmit={createPlayer}></PlayerForm>
            </Box>
        </>
    )
}

export default Create