import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {  useCreateUserWithEmailAndPassword ,useSendEmailVerification} from 
'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Signup.css'

const Signup = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');
    const [agree,setAgree]=useState(false);
    const [error,setError]=useState('');
    const nevigate= useNavigate();


    const [ createUserWithEmailAndPassword,user,loading]= useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    // const [sendEmailVerification, sending] = useSendEmailVerification(
    //     auth
    //   );

    const handelEmail = event =>{
        setEmail(event.target.value);
    }
    const handelPassword = event => {
        setPassword(event.target.value);
    }
    const handelconPassword= event =>{
        setConfirmpassword(event.target.value);
    }

  if(user){
      nevigate('/shop');
  }
    
  const handelAgree = () =>{
        setAgree(!agree);
  }
    


    const handelCreatUser = (event) =>{

      
        if(password !== confirmpassword){
            setError('Your password did not match');
         
            
        }
    
        if(password.length < 6){
            setError('password must be 6 charactrs or longer');
        }

        if(password === confirmpassword && password.length >= 6){
            createUserWithEmailAndPassword(email,password)
        }

    
        event.preventDefault();
        
        // sendEmailVerification();
    
    }

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='from-container'>
                        <h2>Sign up</h2>
                        <form onSubmit={handelCreatUser} >
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handelEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                               
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handelPassword } type="password" className="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Confirm-Password</label>
                                <input onBlur={handelconPassword} type="password" className="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <p className='text-danger'>{error}</p>

                            <div className="form-check">
                                <input onClick={handelAgree} type="checkbox" class="form-check-input" />
                                <label className={`${agree ? 'text-success' : 'text-danger'}`} for="exampleCheck1">agree with all candition</label>
                            </div>

                            <button
                            disabled={!agree}
                            type="submit" className="submit-btn">{loading ? 'please wait...' : 'signup'}</button>
                         </form> 
                         <p className='mt-2'>
                             Already have an account? <Link className='signup-link' to='/login'>Login</Link>
                         </p>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    );
};

export default Signup;