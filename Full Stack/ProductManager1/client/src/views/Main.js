import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';
export default () => {
    return (
        <div>
           <ProductForm/>
           <hr/>
           <AllProducts/>
        </div>
    )
}

