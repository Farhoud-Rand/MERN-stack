import React, { useState, useEffect } from 'react'
import AuthorForm from '../components/AuthorForm'
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState({})
    const [errors, setErrors] = useState("")
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true)
            })
    }, []);

    const updateAuthor = author => {
        axios.patch('http://localhost:8000/api/author/' + id, author)
            .then(res => {
                console.log(res)
                navigate(-1)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                setErrors(errorResponse);
            });
    }

    return (
        <>
            <div className="container mt-5">
                {loaded && <Header linkRoute="/authors" linkName={"Home"} paragraph={"Edit this author:"}></Header>}
                {!loaded && <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>}
                {loaded && <AuthorForm onSubmit={updateAuthor} errors={errors} initialName={author.name} />}
            </div>
        </>
    )
}

export default Update
