import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    
    const [user]=useAuthState(auth);

    const [name,setName]=useState('');
    const [email,setemail]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');

 



    const handelName = event =>{
        setName(event.target.value);
    }
    const handelAddress = event => {
        setAddress(event.target.value);
    }
    const handelPhoneNumber= event =>{
        setPhone(event.target.value);
    }

    
    
    const handelCreatUser = event => {

        const shipping={name,email,address,phone};
        console.log(shipping);

        event.preventDefault();
    }
   
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='from-container'>
                        <h2>Shiping information</h2>
                        <form onSubmit={handelCreatUser} >
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input onBlur={handelName} type="text" className="form-control" aria-describedby="emailHelp" required/>
                               
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input value={user?.email} readOnly type="email" className="form-control" aria-describedby="emailHelp" required/>
                               
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Addresss</label>
                                <input onBlur={handelAddress} type="text" className="form-control"  required/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                                <input onBlur={handelPhoneNumber} type="text" className="form-control"  required/>
                            </div>
                           
                            <button type="submit" className="submit-btn">Add shiping</button>
                         </form> 
                         
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
       
    );
};

export default Shipment;