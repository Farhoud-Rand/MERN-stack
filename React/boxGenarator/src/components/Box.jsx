import React, { useState } from 'react'
import StyledBox from './StyledBox'

function Box() {
    // color form the form
    // array to save data for all squares
    const [color, setColor] = useState("")
    const [colors, setColors] = useState([])
    
    // Function to handle form submition
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the new color
        setColors([...colors,color]);
        // Make the color empty
        setColor("");
        console.log(colors);
    }

    const handleChange = (e) => {
        setColor(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Color' onChange={handleChange} value={color}></input>
                <input type='submit' value='Add'></input>
            </form>
                {colors.map((colorx,index) => 
             <StyledBox id={index} backgroundColor={colorx}></StyledBox>
        )}
        </>
    )
}

export default Box