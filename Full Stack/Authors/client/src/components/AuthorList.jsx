import React from 'react'
import { Link } from "react-router-dom";

const AuthorList = (props) => {
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
                        {props.authors.map((author, i) => (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td colSpan="2">
                                    <Link to={`/author/${author._id}/edit`} className="btn btn-info mx-2 text-white">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => props.delete(author._id)}>Delete</button>
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