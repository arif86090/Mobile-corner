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

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])

    const quantaityUpdate = event =>{
        // const Updatequantaity=event.target.quantaityupdate.value;
    }
    const handelDeliverd = async () =>{
        const productQnty={
            id:product._id,
            exist_qty:product.quantity,
        }
        try{
            const {data} =await axios.put(`http://localhost:5000/deliverd`,productQnty);
            alert('success')
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
                                            <input name='quantaityupdate' type="number" placeholder='quantaity-update'  required />
                                            <button>Update</button>
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