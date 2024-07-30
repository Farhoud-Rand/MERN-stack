import React from 'react'

const DisplayInfo = (props) => {
    const {user} = props;
    const {firstname, lastname, email, password,confirmPassword} = user;
  return (
    <div className="card">
        <div className="card-body">
            <p className="card-text"><span className="font-weight-bold">First Name: </span>{firstname}</p> 
            <p className="card-text"><span className="font-weight-bold">Last Name: </span>{lastname}</p> 
            <p className="card-text"><span className="font-weight-bold">Email Address:</span> {email}</p>
            <p className="card-text"><span className="font-weight-bold">Password:</span> {password}</p>
            <p className="card-text"><span className="font-weight-bold">Confirm Password:</span> {confirmPassword}</p>
        </div>
    </div>
  )
}

export default DisplayInfo