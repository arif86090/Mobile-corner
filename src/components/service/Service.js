import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Service = () => {
    const {serviceId}=useParams();
    const [service,setservice]=useState([]);
    const naviget=useNavigate();

    useEffect(() => {
        fetch(`https://young-fjord-81090.herokuapp.com/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setservice(data))
    },[])

    const confirmOrder = (id) =>{
        naviget(`/confirmorder/${id}`)
    }

    return (
        <div>
         <h4>id: {serviceId} </h4>
         <h2>{service.name} </h2>
         <p>{service.text}</p>
         <button onClick={()=>confirmOrder(serviceId)}>Confirm order</button>
        </div>
    );
};

export default Service;