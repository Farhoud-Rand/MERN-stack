import { useState } from 'react'

const AuthorForm = (props) => {
    const { onSubmit, errors, initialName } = props;
    const [name, setName] = useState(initialName);
    const [nameError, setNameError] = useState("");

    // Handler when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault()
        // Call the formonSubmit function in order to post the data.
        onSubmit({ name })
    }

    // ---------------------------------- 
    // Front validations:
    // ----------------------------------
    // todo in order to set the value of a key in an object, we take copy of the object and add
    // todo  the key with a new value. When its added the value is replaced by the new one. 
    const handleChange = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 3)
            setNameError("Name must be at least 3 characters long")
        else
            setNameError("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='col-3'>
                <p>
                    <label className='form-label'>Name</label><br />
                    <input
                        type="text"
                        name="name" value={name}
                        className='form-control'
                        onChange={handleChange} />
                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                    {!errors.name && nameError && <small className="text-danger">{nameError}</small>}
                </p>
                <input type="submit" value="Submit" className='btn btn-success' />
            </form>
        </>
    )
}

export default AuthorForm