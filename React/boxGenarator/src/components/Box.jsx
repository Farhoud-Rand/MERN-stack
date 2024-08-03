import React, { useState } from 'react'
import StyledBox from './StyledBox'

function Box() {
    // Data form the form
    const [data, setData] = useState({})
    // array to save data for all squares
    const [squares, setSquares] = useState([])

    // Function to handle form submition
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the user enter the input or not and add the default values 
        if (data.color == undefined || data.color == "") data.color = 'black'
        if (data.width == undefined || data.width == 0) data.width = 100
        if (data.height == undefined || data.height == 0) data.height = 100
        setSquares([...squares, data]);
        console.log("color = ", data.color)
        // Make the data empty 
        setData({ color: "", width: 0, height: 0 });
        console.log(squares.toString().padStart(20, "+"));
    }

    const handleChangeColor = (e) => {
        setData({ ...data, color: e.target.value })
    }

    const handleChangeHight = (e) => {
        setData({ ...data, height: e.target.value })
    }

    const handleChangeWidth = (e) => {
        setData({ ...data, width: e.target.value })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="form-control my-2" type="color" placeholder='Color' onChange={handleChangeColor} value={data.color}></input>
                <input className="form-control my-2" type="number" placeholder='Hight' onChange={handleChangeHight} value={data.height}></input>
                <input className="form-control my-2" type="number" placeholder='Width' onChange={handleChangeWidth} value={data.width}></input>
                <input className="btn btn-info my-2" type='submit' value='Add'></input>
            </form>
            <div className='row'>
                {squares.map((colorx, index) =>
                    <StyledBox className='col-3 mx-1' key={index} backgroundColor={colorx.color} height={colorx.height} width={colorx.width}></StyledBox>
                )}
            </div>
        </>
    )
}
export default Box