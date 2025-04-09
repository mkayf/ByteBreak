import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {Button, Input} from '../index'
import authService from "../../appwrite/auth";
import { login as storeLogin } from "../../store/authSlice";
import { useForm } from "react-hook-form";
import './Signup.css'


function Signup() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
  const [errors, setErrors] = useState();

  const signup = async (data) => {
    setErrors('');
    try{
      const userData = await authService.createAccount(data);
      if(userData){
        const userData = await authService.getLoggedInUser();
        if(userData) dispatch(storeLogin(userData));
        navigate('/');
      }
    }
    catch(e){
      setErrors(e.message);
    }
  }

  return (
    <> 
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit(signup)}>
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            <Input type="text" className="input" label="Full  name"
            {...register('full-name', {
              required : true,
              validate : {
                matchPattern : (value) => {
                  return /^[A-Za-z\s]+$/.test(value) || 'Enter valid name'
                }
              }
            })}
            />
            <Input type="email" className="input" label="Email" 
            {...register('email', {
              required : true,
              validate : {
                matchPattern : (value) => {
                  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Enter valid email address'
                }
              }
            })}
            />
            <Input type="password" className="input" label="Password"
            {...register('password', {
              required : true,
              validate : {
                matchPattern : (value) => {
                  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) || 'Enter valid password';
                }
              }
            })}
            />
          </div>
          <button>Sign up</button>
          {errors && <small className="text-red-500">{errors}</small>}
        </form>
        <div className="form-section">
          <p>
            Have an account? <Link to="/login
            "><a>Log in</a></Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
