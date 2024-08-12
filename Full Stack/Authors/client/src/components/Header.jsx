import React from 'react'
import { Link } from "react-router-dom";

const Header = (props) => {
    const { linkName, paragraph, linkRoute } = props;
    return (
        <>
            <h1>Favorite Authors</h1>
            <p><Link to={linkRoute}>
                {linkName}
            </Link></p>
            <p> {paragraph}</p>
        </>
    )
}
export default Header