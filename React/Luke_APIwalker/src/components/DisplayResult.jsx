import React from 'react'
import { Link } from 'react-router-dom'

const DisplayResult = (props) => {

    return (
        <>
        {/* Display the object keys and values */}
            <ul className="list-group">
                {props.data && Object.entries(props.data).length > 0 &&
                Object.entries(props.data).map(([key, value]) => (
                    key === "homeworld" ? (
                        <Link to={value} key={key}>homeworld</Link>
                    ) : (
                        <li key={key} className="list-group-item">
                            {key} = {value}
                        </li>
                    )
                ))        
                }
            </ul>
        </>
    )
}

export default DisplayResult