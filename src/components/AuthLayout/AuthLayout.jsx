import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AuthLayout({children, authentication = true}) {

    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login');
        }
        else if(!authentication && authStatus !== authentication){
            navigate('/');
        }
        setLoader(false);
    }, [authStatus, navigate, authentication])
    

  return loader ? <p>loading</p> : <div>{children}</div>
}

export default AuthLayout