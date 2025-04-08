import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import Home from './pages/Home';
import './App.css'

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
  

  return loading ? ('Loading') : (
    <>
      <Header/>
      {/* Outlet */}
      <Home/>
      <Footer/>
    </>
  )
}

export default App
