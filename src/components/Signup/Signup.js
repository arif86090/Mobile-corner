import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {  useCreateUserWithEmailAndPassword} from 
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
      nevigate('/home');
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
        
    
    }

    return (
        <div className='container'>
          
 <div className='row py-5 mt-5'>
    <div className='col-md-2'></div>
     <div className='col-md-8'>
        <div className='row '>
            <div className='col-md-4 login-text-bg form-flex-style'>
                <div className='login-text text-center py-4'>
                    <h2>Hell0!!</h2>
                    <button><Link className='' to='/login'>Signin</Link></button>
                </div>
            </div>
            <div className='col-md-8 login-form-style py-4'>
                <div className='px-4 py-4'>
                    <h4 className='text-center fw-bold py-3'>Sign Up Form</h4>
                <form onSubmit={handelCreatUser}>
                <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input onBlur={handelEmail} type="email" className="form-control" aria-describedby="emailHelp" required/>
                               
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input onBlur={handelPassword } type="password" className="form-control" required/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Confirm-Password</label>
                                <input onBlur={handelconPassword} type="password" className="form-control"  required/>
                            </div>
                            <p className='text-danger'>{error}</p>

                            <div className="form-check">
                                <input onClick={handelAgree} type="checkbox" class="form-check-input" />
                                <label className={`${agree ? 'text-success' : 'text-danger'}`} for="exampleCheck1">Agree with all candition</label>
                            </div>

                            <button
                            disabled={!agree}
                            type="submit" className="sigin-btn">{loading ? 'please wait...' : 'signup'}</button>
                         </form>


                </div>
            </div>
        </div>
    </div>
    <div className='col-md-2'></div>
</div>

        </div>
    );
};

export default Signup;