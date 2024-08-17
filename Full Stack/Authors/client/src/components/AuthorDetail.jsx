import React from 'react'

const AuthorDetail = ({ loaded, author, deleteAuthor }) => {
    return (
        <>
            {/* If the loaded variable is false display this message */}
            {!loaded && <p>This author doesn't exist the database</p>}

            {/* If the loaded variable and true and there is an object display the data */}
            {loaded && (
                <div>
                    <p>Name: {author.name}</p>
                    <button className="btn btn-danger mt-2" onClick={() => deleteAuthor(author._id, -1)}>
                        Delete
                    </button>
                </div>
            )}
        </>
    )
}

export default AuthorDetail