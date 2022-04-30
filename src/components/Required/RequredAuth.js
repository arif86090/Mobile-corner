import React from 'react';
import { useAuthState,useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading';

const RequredAuth = ({children}) => {
    const [user,loading]=useAuthState(auth);

     const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
      );

    const location=useLocation();

    const sentMail = () =>{
        sendEmailVerification();
        alert('check your Email')
    }

    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    if(!user.emailVerified){
        return <div className='text-center'>
            <h3 className='text-danger'>your Email not varifide</h3>
            <h5>please varfide your email</h5>
            <button onClick={sentMail}>sent mail</button>
        </div>
    }
    return children;
        
    
};

export default RequredAuth;