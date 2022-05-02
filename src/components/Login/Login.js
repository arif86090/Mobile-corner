import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle  } from 
'react-firebase-hooks/auth';
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import auth from '../../firebase.init';
import './Login.css';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import google from '../../images/google.png'


const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [forget,setForget]=useState(false);
    const [forgetPassword,setForgrtPassword]=useState('');
   
    const [signInWithGoogle,user2] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


// RequredAuth     
const navigate =useNavigate();
const location=useLocation();
const from =location?.state?.from?.pathname || '/';


      if(user){
        navigate(from,{relace:true});
        // navigate('/shop')
    }
    if(user2){
        navigate(from,{relace:true});
        // navigate('/shop')
    }

    const handelEmail = event =>{
        setEmail(event.target.value);
    }
    const handelPassword = event => {
        setPassword(event.target.value);
    }

    const fromLogin = async event =>{
        event.preventDefault();
        await signInWithEmailAndPassword(email,password);
        const {data}=await axios.post('https://young-fjord-81090.herokuapp.com/login',{email});
        console.log(data);
       localStorage.setItem('accessToken',data.accessToken);
       navigate(from,{relace:true});
        

    }


    const loginGoogle = () => {
        signInWithGoogle();
        
         
    }

    const handelForgetPassword = event =>{
        setForgrtPassword(event.target.value);
    }
    
const handelForgetPassEmail = () =>{
    sendPasswordResetEmail(forgetPassword);
    if(forgetPassword){
        toast("Check your Email");
    }
    else{
        toast("Please enter your  Email");
    }
    
    
}




    return (
        <div className='container'>
          
{/* new */}

<div className='row py-5'>
    <div className='col-md-2'></div>
    <div className='col-md-8'>
        <div className='row '>
            <div className='col-md-4 login-text-bg form-flex-style'>
                <div className='login-text text-center py-4'>
                    <h2>Hell0!!</h2>
                    <button><Link className='' to='/signup'>Sign Up</Link></button>
                </div>
            </div>
            <div className='col-md-8 login-form-style py-4'>
                <div className='px-4 py-4'>
                    <h4 className='text-center fw-bold py-3'>Sign In Form</h4>
                <form onSubmit={fromLogin}>
                            <div className="mb-3">
                                <input onBlur={handelEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder='Email*' />
                               
                            </div>
                            <div className="mb-3">
                               
                                <input onBlur={handelPassword} type="password" className="form-control" id="exampleInputPassword1" required placeholder='Password*'/>
                            </div>

                            <p className='text-danger'>{error?.message}</p>
    
                            <button type="submit" className="submit-btn">{loading ?  'loading..' : 'Sign In' }</button>
                         </form>

<button className='forget-btn p-2 mt-3' onClick={() =>setForget(!forget)}>Forget password</button>

<div className={`py-4 ${forget ? 'd-block' : 'd-none'}`}>
    <input onBlur={handelForgetPassword} type="email" className="form-control" placeholder='Enter your Email' />
    <button onClick={handelForgetPassEmail} className='forget-submit p-2 px-3 mt-3 '>{sending ? 'Sending..' :'sent'}</button> 
    <ToastContainer/>
</div>

<button onClick={loginGoogle} className='google-btn py-1 w-100 mt-3'><span><img src={google} className='google' alt="" /></span> Login with google</button>



                </div>
            </div>
        </div>
    </div>
    <div className='col-md-2'></div>
</div>





        </div>
    );
};

export default Login;