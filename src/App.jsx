import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header } from './components';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    authService.getLoggedInUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}));
      } else{
        dispatch(logout());
      }
    })
    .catch((e) => console.log('App :: getLoggedInUser', e))
    .finally(() => setLoading(false));
  
  }, [])
  

  return loading ? (
<div className="flex items-center justify-center min-h-screen">
  <div className="relative">
    <div className="relative w-32 h-32">
      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"
        style={{animationDuration: '3s'}}
      ></div>

      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
        style={{animationDuration: '2s'}}
      ></div>
    </div>

    <div
      className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"
    ></div>
  </div>
</div>

  ) : (
    <>
      <Header/>
        <Outlet />
    </>
  )
}

export default App
