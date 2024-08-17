import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header';
import AuthorList from '../components/AuthorList';

const Index = ({ deleteAuthor }) => {
    const [authors, setAuthors] = useState([]);

    // ! Create a function instead of fetching the data inside the use Effect because we dont want the use Effect to enter an infinite 
    // ! loop.  
    useEffect(() => {
        getAuthors()
    }, []);

    // This function is used to fetch the data (All authors) from the backend side.
    const getAuthors = () => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => {
                console.error("Error fetching authors:", err);
            });
    }

    // ? This function is used to remove the element from the DOM after removing it from the database, we need it so there is no need 
    // ? to refresh the page in order for the document to disappear.
    // ! If we put the authors inside the useEffect, there is no need for this function, but the useEffect enters an infinite loop
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <>
            <div className="container mt-5">
                <Header linkRoute="/authors/new" paragraph="We have quotes by:" linkName="Add new author" />
                <AuthorList deleteAuthor={deleteAuthor} authors={authors} removeFromDom={removeFromDom} />
            </div>
        </>
    )
}

export default Index