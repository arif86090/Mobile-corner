import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ManageItemsDtls from '../ManageItemsDtls/ManageItemsDtls';

const Myitems = () => {

    const[user]=useAuthState(auth);
    const[orders,setOrder]=useState([]);
    const naviget=useNavigate();
    
    useEffect(() => {
        const getOrders= async () => {
            const email=user?.email;
            const url=`http://localhost:5000/myitems?email=${email}`;
          try{
            const {data}=await axios.get(url,{
                headers:{
                 authorization : `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setOrder(data)
          }
          catch(error){
            console.log(error.massage);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                naviget('/login')
            }
          }
        }
        getOrders();
       
        
    },[user]);

    return (
        <div className='container py-5'>
             <h2 className='mb-5 text-center'>My <span className='allPHder'>Items</span></h2>
            <div className='all-products'>
                {
                    orders.map(product => <ManageItemsDtls
                    key={product._id}
                    product={product}    
                    ></ManageItemsDtls>)
                }
            </div>
        </div>
    );
};

export default Myitems;