import { useState } from 'react'

const PlayerForm = (props) => {
    const { onSubmit, errors } = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (error.length == 0)
            onSubmit({ name, position })
    }

    const handleName = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 2)
            setError("Name must be at least 2 characters")
        else
            setError("");
    }

    return (
        <form onSubmit={handleSubmit} >
            <p>
                <label className='form-label'>Name</label><br />
                <input
                    type="text"
                    name="name" value={name}
                    className='form-control'
                    onChange={handleName} />
                    {error && <small className="text-danger">{error}</small>}
                {errors.name && <small className="text-danger">{errors.name.message}</small>}
            </p>
            <p>
                <label className='form-label'>Position</label><br />
                <input
                    type="text"
                    name="name" value={position}
                    className='form-control'
                    onChange={(e) => { setPosition(e.target.value) }} />
                {errors.position && <small className="text-danger">{errors.position.message}</small>}
            </p>

            <input type="submit" value="Submit" className='btn btn-success' />
        </form>
    )
}

export default PlayerForm