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

        const deleteInventory = id =>{
            const proceed=window.confirm('Are you sure ypu want to Delete');
            if(proceed){
                const url=`http://localhost:5000/product/${id}`;
                fetch(url,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
              if(data.deletedCount > 0){
                  console.log('delete success full');
                  const remaining= products.filter(product => product._id !== id);
                  setProducts(remaining);
              }
                    
                })
            }
        }

    return (
        <div className='container py-5'>
            <h2 className='mb-5 text-center'>All <span className='allPHder'>Products</span></h2>
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