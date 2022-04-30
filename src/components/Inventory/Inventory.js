import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';

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
    return (
        <div>
            <h2>This is Inventory</h2>
            <h2>{product.name}</h2>
        </div>
    );
};

export default Inventory;