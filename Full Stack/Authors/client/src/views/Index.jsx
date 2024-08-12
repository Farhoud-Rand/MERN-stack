import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header';
import AuthorList from '../components/AuthorList';

const Index = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => {
                console.error("Error fetching authors:", err);
            });
    }, [authors]);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <div className="container mt-5">
                <Header linkRoute="/authors/new" paragraph="We have quotes by:" linkName="Add new author" />
                <AuthorList delete={deleteAuthor} authors={authors} />
            </div>
        </>
    )
}

export default Index