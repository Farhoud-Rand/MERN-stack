import React,{ useState }from "react";
import buttonStyle from "../componentcss/buttonAge.module.css"
// This is new component
// We must pass props as parameter for the function in order to get data from new instances 
const ButtonAge = (props) => {
    const {firstName, lastName, age,setAge} = props;

    const clickHandler = () => {
        setAge(age+1)
    }

    return (
        <>
        <button className={buttonStyle.btn} onClick={clickHandler}>Birthday Button {firstName} {lastName}</button>
        </>
    );
}
export default ButtonAge