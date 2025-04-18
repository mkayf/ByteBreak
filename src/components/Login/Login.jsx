import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { login as storeLogin } from '../../store/authSlice'
import { useForm } from 'react-hook-form'
import {Button, Input} from '../index'


function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('');
    const {register, handleSubmit} = useForm({
      mode : onchange
    });

    const login = async (data) => { 
        setErrors('');
        try {
            const session = await authService.login(data);
            if(session){
              const userData = await authService.getLoggedInUser();
              if(userData){
                dispatch(storeLogin(userData));
                navigate('/');
              } 
            }
        } catch (error) {
            setErrors(error.message);
        }
    }


  return (
    <div className='w-full flex justify-center items-center'>
<div
  style={{animation: "slideInFromLeft 1s ease-out"}}
  className="max-w-md w-full bg-gradient-to-r from-green-800 to-green-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 poppins-regular"
>
  <h2
    style={{animation: "appear 2s ease-out"}}
    className="text-center text-4xl font-extrabold text-white"
  >
    Welcome
  </h2>
  <p style={{animation: 'appear 3s ease-out'}} className="text-center text-gray-200">
    Sign in to your account
  </p>
  <form className="space-y-6" onSubmit={handleSubmit(login)}>
    <div className="relative">
      <Input label="Email" type="email" placeholder="Enter email" labelColor="text-white" className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-green-500" 
      {...register('email', {
        required : true,
        validate : {
          matchPattern : (value) => {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Enter valid email address';
          }    
        }
      })}
      />
      {
        errors.email && <small className='text-red-500'>{errors.email.message}</small>
      }
    </div>
    <div className="relative">
      <Input type="password" label="Password" labelColor="text-white" placeholder="Enter password" className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-green-500" 
      {...register('password', {
        required : true,
        validate : {
          matchPattern : (value) => {
            return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || 'Enter valid password';
          }
        }
      })}
      />
      {
        errors.password && <small className='text-red-500'>{errors.password.message}</small>
      }
    </div>
    <Button type="submit" text='Login' color='text-black' className="cursor-pointer w-full py-3 px-4 bg-white hover:text-white hover:bg-green-700 rounded-md shadow-lg transition duration-200" />
  </form>
  <div className="text-center text-gray-300">
    Don't have an account? 
    {" "}
    <Link to="/signup">
      <span className="text-purple-300 hover:underline">Sign up</span>
    </Link>
  </div>
</div>
</div>


  )
}

export default Login 