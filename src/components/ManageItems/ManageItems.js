import React, { useEffect, useState } from 'react';
import ManageItemsDtls from '../ManageItemsDtls/ManageItemsDtls';
import './ManageItems.css'
const ManageItems = () => {

    const [products,setProducts]=useState([]);

        useEffect(() => {
            fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
        },[])

    return (
        <div className='container py-5'>
            <h2 className='mb-5 text-center'>All <span className='allPHder'>Products</span></h2>
            <div>
                <div className='all-products'>
                        {
                            products.map(product => <ManageItemsDtls
                            key={product._id}
                            product={product}
                            ></ManageItemsDtls>)
                          
                        }
                 </div>
            </div>
        </div>
    );
};

export default ManageItems;