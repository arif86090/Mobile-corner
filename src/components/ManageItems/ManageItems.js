import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageItemsDtls from '../ManageItemsDtls/ManageItemsDtls';
import './ManageItems.css'
const ManageItems = () => {

    const [products,setProducts]=useState([]);

        useEffect(() => {
            fetch('https://secure-refuge-85041.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
        },[])

        const deleteInventory = id =>{
            const proceed=window.confirm('Are you sure you want to Delete');
            if(proceed){
                const url=`https://secure-refuge-85041.herokuapp.com/product/${id}`;
                fetch(url,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
              if(data.deletedCount > 0){
                  console.log('Delete success full');
                  const remaining= products.filter(product => product._id !== id);
                  setProducts(remaining);
              }
                    
                })
            }
        }

    return (
        <div className='container py-5'>
            <h2 className='mb-5 text-center'>All <span className='allPHder'>Products</span></h2>
            <button className='add-product-btn py-3'><Link to='/addservice'>Add Product</Link></button>
            <div>
                <div className='all-products'>
                        {
                            products.map(product => <ManageItemsDtls
                            key={product._id}
                            product={product}
                            deleteInventory={deleteInventory}
                            ></ManageItemsDtls>)
                          
                        }
                 </div>
            </div>
        </div>
    );
};

export default ManageItems;