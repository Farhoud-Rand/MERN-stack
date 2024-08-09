import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import axios from 'axios';

const ProductDetails = () => {
  // Varaible to save product information 
  const [product, setProduct] = useState({})
  const { id } = useParams();

  // To get the product information we will use useEffect hook
  useEffect(() => {
    axios.get('http://localhost:8000/api/products/'+id)
    .then(res=> {
      console.log(res.data)
      setProduct(res.data)
    })
    .catch(err=>console.log(err))
  }, [id])

  return (
    <div className='my-3'>
      <h1>Product Details</h1>
      <hr className='col-8'></hr>
      <div className='row d-flex align-items-center'>
        <h3 className='col-2'>Title:</h3>
        <h6 className='col-2'>{product.title}</h6>
      </div>  
      <div className='row d-flex align-items-center'>
        <h3 className='col-2'>Price:</h3>
        <h6 className='col-2'>{product.price}</h6>
      </div> 
      <div className='row d-flex align-items-center'>
        <h3 className='col-2'>Description:</h3>
        <h6 className='col-2'>{product.description}</h6>
      </div> 
    </div>
  )
}

export default ProductDetails