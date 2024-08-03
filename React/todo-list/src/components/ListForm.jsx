import React, { useState, useEffect } from 'react'

const ListForm = (props) => {
    // State to save new task information and another one to save error for this input
    const [task, setTask] = useState("")
    const [error, setError] = useState(" ")
    // State to make the input value = ""
    const [newTask, setNewTask] = useState(false)

    // Function to check the entered task if it valid or not 
    function isValidTask(value) {
        return value.length >= 5 ? true : false;
    }

    // Function to change the error state according to the entered input
    const checkTask = (e) => {
        setNewTask(false) // Change it to false in order to make the input empty
        if (isValidTask(e.target.value)) {
            setError("");
            setTask(e.target.value)
        } else {
            setError("Error: the task should be at least 5 characters")
        }
    }

    // Function to handle form submition 
    const handleSumbit = (e) => {
        e.preventDefault()
        if (!error) {
            // If there is no error then add a new task
            props.addTask(task)
            setNewTask(true)
            setError(" ")
        } else {
            setError("Error: the task should be at least 5 characters")
        }
    }

    return (
        <>
            <h2>Add new task</h2>
            <form onSubmit={handleSumbit}>
                <input className='form-control' type='text' onChange={checkTask} value={newTask ? "" : undefined} />
                <p className='text-danger'><small>{error}</small></p>
                <input className='btn btn-info' type='submit' value="Add"></input>
            </form>
        </>
    )
}

export default ListForm