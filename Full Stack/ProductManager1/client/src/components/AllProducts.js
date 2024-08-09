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

  return (
    <div className='justify-content-center text-center'>
      <h2>All Products</h2>
      <ul className="list-group">
        {products.map((product, index) =>(
          <li key={index} className="list-group-item"> <Link to={"/products/"+product._id}>{product.title}</Link></li>
        ))}
      </ul>
    </div>

  )
}

export default AllProducts