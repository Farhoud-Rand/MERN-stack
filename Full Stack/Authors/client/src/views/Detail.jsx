import { useEffect } from 'react'
import AuthorDetail from '../components/AuthorDetail'
import { useParams } from "react-router-dom";

const Detail = ({ loaded, author, deleteAuthor, getAuthor }) => {
    // ! Get the ID value from the url parameter
    const { id } = useParams();

    // This function is used to get the document from the database using the id in the route 
    useEffect(() => {
        getAuthor(id);
    }, []);

    return (
        <>
            <AuthorDetail loaded={loaded} author={author} deleteAuthor={deleteAuthor} />
        </>
    )
}

export default Detail