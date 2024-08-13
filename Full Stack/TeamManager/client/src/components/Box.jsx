import React from 'react'
import { Link } from 'react-router-dom'

const Box = (props) => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-start mt-5 mb-2">
                    <span className='col-1'></span>
                    <Link className='mx-2' to='/players/list'>Manage Player</Link>
                    |
                    <Link className='mx-2' to='/players/game'>Manage Player Status</Link>
                </div>
                <div className='border border-dark'>
                    <div className="d-flex justify-content-start my-2">
                        <span className='col-1'></span>
                        <Link className='mx-2' to='/players/list'>List</Link> |
                        <Link className='mx-2' to='/players/addplayers'>Add Player</Link>
                    </div>
                    <div >
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box