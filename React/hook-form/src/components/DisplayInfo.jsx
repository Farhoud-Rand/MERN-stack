import React from 'react'

const DisplayInfo = (props) => {
    const {user} = props;
    const {firstname, lastname, email, password,confirmPassword} = user;
  return (
    <div class="card">
        <div class="card-body">
            <p class="card-text"><span class="font-weight-bold">First Name: </span>{firstname}</p> 
            <p class="card-text"><span class="font-weight-bold">Last Name: </span>{lastname}</p> 
            <p class="card-text"><span class="font-weight-bold">Email Address:</span> {email}</p>
            <p class="card-text"><span class="font-weight-bold">Password:</span> {password}</p>
            <p class="card-text"><span class="font-weight-bold">Confirm Password:</span> {confirmPassword}</p>
        </div>
    </div>
  )
}

export default DisplayInfo