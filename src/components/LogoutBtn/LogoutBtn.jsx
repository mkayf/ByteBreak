import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout()
    .then(() => dispatch(logout()))
    .catch((e) => console.log('LogoutBtn :: logout', e))
  }

  return (
    <button className='cursor-pointer px-4 py-2 rounded-lg bg-green-500 font-semibold text-white hover:bg-green-600 duration-300' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn