import React , { useState } from 'react'
import './Login.css'
import axios from './axios';
// import { FcGoogle } from 'react-icons/fc';



function Login() {
   
    const googleAuth = (event) => {
        // setOpen(true);
        event.preventDefault();
    
            window.open(
                'http://localhost:8000/auth/google/callback',
                "_self"
            );
        // setOpen(false);
        };

  return (
    <div>
    <button className="continue__withGoogle" onClick={googleAuth}>
    login
  </button>
</div>
  )
}
// <FcGoogle/> <p className='continue__withGoogle__heading'>Continue with Google </p>
export default Login