import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageItemsDtls.css'

const ManageItemsDtls = ({product}) => {
    const {_id,img,name,price,quantity,supplier,text}=product;
    const naviget=useNavigate();

    const handelInventory = id =>{
        naviget(`/inventory/${id}`);
    }



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
                
            })
        }
    }

    return (
        <div>
             <div className='products-details2'>
             <div className='text-center'> <img  src={img}  alt="" /></div>
              <h4 ><span>Name:</span> {name}</h4>
              <h6><span>Price:</span> {price}</h6>
              <p><span>Quantity:</span> {quantity}</p>
              <p><span>Supplier: </span>{supplier}</p>
              <p>{text}</p> 
              <div className='btn-mange'>
                <div className='productDtS-btn2  text-center'>
                <button onClick={()=> handelInventory(_id)}>update</button>
                <button className='bg-danger' onClick={()=> deleteInventory(_id)}>Delete</button>
                </div>
            </div>
          </div>
        </div>
    );
};

export default ManageItemsDtls;