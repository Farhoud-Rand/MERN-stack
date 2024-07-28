import React from "react";
// This is new component
// We must pass props as parameter for the function in order to get data from new instances 
const Person = (props) => {
    const {firstName, lastName, color, age} = props;
    return (
        <>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {color}</p>
        </>
    );
}
export default Person