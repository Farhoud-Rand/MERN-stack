import React,{ useState }from "react";
import ButtonAge from "./buttonAge";
// This is new component
// We must pass props as parameter for the function in order to get data from new instances 
const Person = (props) => {
    const {firstName, lastName, color, inputAge} = props;
    const [age,setAge] = useState(inputAge);
    return (
        <>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {color}</p>
        <ButtonAge firstName ={firstName} lastName={lastName} age={age} setAge={setAge}></ButtonAge>
        </>
    );
}
export default Person