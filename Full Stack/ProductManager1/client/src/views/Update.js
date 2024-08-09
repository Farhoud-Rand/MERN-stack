import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
    
const Update = (props) => {
    const {id} = useParams()
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                // Go back to the main page
                navigate(-1)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1 className='mt-5 mb-3'>Update a Product</h1>
            <form className='col-5' onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" className="form-control"
                    name="title" 
                    value={ title } 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"  className="form-control"
                    name="price"
                    value={ price } 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" className="form-control"
                    name="description"
                    value={ description } 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input  className="btn btn-info text-white" type="submit" />
            </form>
        </div>
    )
}

export default Update;
