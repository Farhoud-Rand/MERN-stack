import React, { useEffect, useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFisrtname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" })
    // const [canSubmit,setCanSubmit] = useState(false)

    // Function to check if there is any error in errors object in order to avoid submit the form when we have invalid data 
    const areAllFieldsEmpty = () => {
        let canSubmit = false
        if (firstname == "" || lastname == "" || email == "" || password == "" || confirmPassword == "")
            return canSubmit
        for (let error in errors){
            if (error != ""){
                canSubmit = false;
                break
            } 
        }
        canSubmit = true
        return canSubmit;
    };

    // Function to create a new user when submit the form without errors
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        console.log(errors)
        console.log(areAllFieldsEmpty())
        if (areAllFieldsEmpty()) {
            // create a javascript object to hold all of the values
            const newUser = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            };
            console.log(newUser)
            setFisrtname("");
            setLastname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            // We will use setUser function from props in order to change the user state in App.jsx (to reflect its value in the DisplayInfo component)
            props.setUser(newUser);
        }
    };

    // Function to add firstname validation
    const firstNamevalidation = (e) => {
        console.log("errors", errors)
        setFisrtname(e.target.value);
        if (firstname.length < 2) {
            setErrors({ ...errors, firstname: "First Name must be at least 2 characters" })
            // setCanSubmit(false)
        } else {
            setErrors({ ...errors, firstname: "" })
            // setCanSubmit(true)
        }
    }

    // Function to add lastname validation
    const lastNamevalidation = (e) => {
        console.log("errors", errors)
        setLastname(e.target.value);
        if (lastname.length < 2) {
            setErrors({ ...errors, lastname: "Last Name must be at least 2 characters" })
            // setCanSubmit(false)

        } else {
            setErrors({ ...errors, lastname: "" })
        }
    }

    // Function to add email validation for length
    const emailValidation = (e) => {
        setEmail(e.target.value);
        if (email.length < 5) {
            setErrors({ ...errors, email: "Email must be at least 5 characters" })
        } else {
            setErrors({ ...errors, email: "" })
        }
    }

    // Function to add email validation for valid
    const emailValidation2 = (e) => {
        setEmail(e.target.value);
        if (!email.includes('@')) {
            setErrors({ ...errors, email: errors.email + "\n" + "Email must be valid email" })
            // setCanSubmit(false)

        }
    }

    // Function to add validation for password
    const passwordValidation = (e) => {
        setPassword(e.target.value);
        if (password.length < 8) {
            setErrors({ ...errors, password: "Password must be at least 8 characters" })
        } else {
            setErrors({ ...errors, password: "" })
        }
    }

    // Function to add validation for confirmPassword
    const confirmPasswordValidation = (e) => {
        setConfirmPassword(e.target.value);
        if (confirmPassword.length < 8) {
            setErrors({ ...errors, confirmPassword: "Confirm Password must be at least 8 characters" })
        } else {
            setErrors({ ...errors, confirmPassword: "" })
        }
    }

    // Function to add validation for confirmPassword
    const confirmPasswordValidation2 = (e) => {
        if (confirmPassword != password) {
            setErrors({ ...errors, confirmPassword:errors.confirmPassword +"\n"+ "Confirm Password must match the password" })
        } 
    }

    
    
    // setCanSubmit(!areAllFieldsEmpty());
    return (
        <form onSubmit={createUser}>
            <h1>User Form</h1>
            <div className="form-group">
                <label>First Name: </label>
                <input type="text" className="form-control" onChange={firstNamevalidation} value={firstname} />
                <p className='text-danger'><small>{errors.firstname}</small></p>
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input type="text" className="form-control" onChange={lastNamevalidation} value={lastname} />
                <p className='text-danger'><small>{errors.lastname}</small></p>
            </div>
            <div className="form-group">
                <label>Email Address: </label>
                <input type="text" className="form-control" onChange={emailValidation} onBlur={emailValidation2} value={email} />
                <pre className='text-danger'><small>{errors.email}</small></pre>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input type="password" className="form-control" onChange={passwordValidation} value={password} />
                <p className='text-danger'><small>{errors.password}</small></p>
            </div>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input type="password" className="form-control" onChange={confirmPasswordValidation} onBlur={confirmPasswordValidation2} value={confirmPassword} />
                <p className='text-danger'>
                
                {errors.confirmPassword.split('\n').map((item, idx) => (
                    <small key={idx}>
                    {item}
                    <br/>
                    </small>
                ))}
            </p>
            <input className="btn btn-info" type="submit" value="Create User" />
            </div>
        </form>
    );
};

export default UserForm;