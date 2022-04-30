import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'



const Products = ({product}) => {
    const {_id,img,name,price,quantity,supplier,text}=product;
    const naviget=useNavigate();

    const handelInventory = id =>{
        naviget(`/inventory/${id}`);
    } 
    return (
        <div>
          <div className='products-details'>
             <div className='text-center'> <img  src={img}  alt="" /></div>
              <h4 ><span>Name:</span> {name}</h4>
              <h6><span>Price:</span> {price}</h6>
              <p><span>Quantity:</span> {quantity}</p>
              <p><span>Supplier: </span>{supplier}</p>
              <p>{text}</p> 
              <div className='productDtS-btn m-auto text-center'>
              <button onClick={()=> handelInventory(_id)}>update</button>
            </div>
          </div>
         
            
        </div>
    );
};

export default Products;