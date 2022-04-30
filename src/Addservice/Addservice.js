import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';





const Addservice = () => {
  const[user]=useAuthState(auth);

const handelform = event =>{
    event.preventDefault();
    const email=user?.email;
    const name=event.target.name.value;
    const price=event.target.price.value;
    const quantity=event.target.quantity.value;
    const supplier=event.target.supplier.value;
    const img=event.target.img.value;
    const text=event.target.text.value;

    const Addproduct={email,name,price,quantity,supplier,img,text};

    fetch('http://localhost:5000/product',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(Addproduct)
      })
      .then(res => res.json())
      .then(data => {
        console.log('success',data);
        alert('user add successfully')
        event.target.reset();
      })
  
}
    return (
        <div>
            <h2>Add service</h2>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
              <form  onSubmit={handelform}>
        <br/>
        <br/>
        <input type="text" name='name' placeholder='Product Name' className='form-control'/>
        <br/>
        <br/>
        <input type="number" name='price' placeholder='Price' className='form-control' />
        <br/>
        <br/>
        <input type="number" name='quantity' placeholder='Quantity' className='form-control' />
        <br/>
        <br/>
        <input type="text" name='supplier' placeholder='Supplier' className='form-control' />
        <br/>
        <br/>
        <input type="text" name='img' placeholder='img-URL' className='form-control' />
        <br/>
        <br/>
        <textarea className='form-control' name="text" id="" cols="30" rows="10" placeholder='discripation'></textarea>
        <input type="submit" value ="Add Product"  />
      </form>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    );
};

export default Addservice;