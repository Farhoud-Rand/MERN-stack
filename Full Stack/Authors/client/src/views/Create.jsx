import React from 'react'
import Header from '../components/Header'
import AuthorForm from '../components/AuthorForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
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
            <div className="container mt-5">
                <Header linkRoute="/authors" paragraph="Add a new author:" linkName="Home" />
                <AuthorForm onSubmit={createAuthor} errors={errors} initialName=""></AuthorForm>
            </div>
        </>
    )
}

export default Create