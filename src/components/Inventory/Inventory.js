import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    // const[user]=useAuthState(auth);
    // console.log(user);
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [inputQnty,setinputQnty]=useState(1);
    const [counts,setCounts]=useState(0);

    useEffect(() => {
        fetch(`https://secure-refuge-85041.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[id,counts])


    const quantaityUpdate = async (event) =>{
        event.preventDefault();
        const newQnty=Number(product.quantity)+ Number(inputQnty);
        console.log(newQnty);

        const inputproductQunty = {
            id:product._id,
            quantity:newQnty,
        }
        console.log(inputproductQunty)
        try{
            const {data} =await axios.put(`https://secure-refuge-85041.herokuapp.com/updateQunty`,inputproductQunty);
            alert('Update success');
            setCounts(counts+1);
        }catch(err){
            alert('error')
        }
    }


    const handelDeliverd = async () =>{
        const newQnty=Number(product.quantity)-1;
        const productQnty={
            id:product._id,
            quantity:newQnty,
        }
       
        try{
            const {data} =await axios.put(`https://secure-refuge-85041.herokuapp.com/updateQunty`,productQnty);
            alert('Deliverd success')
            setCounts(counts+1);
        }catch(err){
            alert('error')
        }

    }

    return (
        <div>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='row products-discripation-row'>
                            <div className='col-md-5 mt-4 text-center align-self-center'>
                                <img src={product.img} className='img-fluid' alt="" />
                            </div>
                            <div className='col-md-7'>
                             <div className='products-discripation'>
                                    <h4 ><span>Name:</span> {product.name}</h4>
                                    <h6><span>Price:</span> {product.price}</h6>
                                    <p><span>Quantity:</span> {product.quantity}</p>
                                    <p><span>Supplier: </span>{product.supplier}</p>
                                    <p>{product.text}</p> 
                                    <div className='productDtS-btn m-auto text-center'>
                                        {/* <button onClick={()=> handelInventory(_id)}>update</button> */}
                                    </div>
                                    <div className='quantaity-update'>
                                        <form className='' onSubmit={quantaityUpdate}>
                                            <input  onChange={(e)=>setinputQnty(e.target.value)} type="number" placeholder='quantaity-update'  required />
                                            <button type='submit'>Update</button>
                                        </form>
                                    </div>
                                    <div className='delivered-btn mt-4 '>
                             <button onClick={handelDeliverd} className='bg-danger'>Delivered</button>
                                    </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;