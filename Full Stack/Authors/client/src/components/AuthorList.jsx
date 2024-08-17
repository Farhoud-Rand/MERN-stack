import React from 'react'
import { Link } from "react-router-dom";

const AuthorList = ({ deleteAuthor, removeFromDom, authors }) => {

    // This function is used to delete author from the database and DOM 
    const deleteProd = (authorId) => {
        // Set the direction to 0 so the user stays in the same page  
        deleteAuthor(authorId, 0);
        removeFromDom((authorId));
    }

    return (
        <>
            <div className="col-6">
                <table className="table table-hover table-bordered text-center">
                    <thead>
                        <tr className='table-success'>
                            <th>Author</th>
                            <th scope="col-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author, i) => (
                            <tr key={i}>
                                <td><Link to={`/author/details/${author._id}`}>{author.name}</Link></td>
                                <td colSpan="2">
                                    <Link to={`/author/${author._id}/edit`} className="btn btn-info mx-2 text-white">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => deleteProd(author._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div>
        </>
    )
}

export default AuthorList