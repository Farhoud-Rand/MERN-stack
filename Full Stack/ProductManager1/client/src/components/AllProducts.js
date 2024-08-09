import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  Link 
} from "react-router-dom";

const AllProducts = () => {
  // Variable to save all products from our database 
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res=> {
        // console.log("hello",products)
        setProducts(res.data)
      })
      .catch(err=>console.log(err))
  },[products])

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then(res => console.log(res))
        .catch(err => {
            console.error('Error deleting product:', err);
        });
  }
  return (
    <div className='justify-content-center text-center'>
      <h2>All Products</h2>
      <ul className="list-group">
        {products.map((product, index) =>(
          <li key={index} className="my-3 row justify-content-center">
            <Link to={"/products/"+product._id} className='col-3'>{product.title}</Link>
            <Link to={`/product/edit/${product._id}`} className="btn btn-primary mx-5 col-1">Edit</Link>
            <button className="btn btn-danger mx-2 col-1" onClick={(e) => { deleteProduct(product._id) }}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>

  )
}

export default AllProducts