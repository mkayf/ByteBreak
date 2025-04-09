import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import { AuthLayout } from './components/index.js'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : '',
                element : <Home />
            },
            {
                path : '/login',
                element : (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                )
            },
            {
                path : '/signup',
                element : (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                )
            },
            {
                path : '/allPosts',
                element : (
                    <AuthLayout authentication={true}>
                        <AllPosts />
                    </AuthLayout>
                )
            },
            {
                path : '/',
                element : (
                    <AuthLayout authentication={true}>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                )
            },
            {
                path : '/addPost',
                element : (
                    <AuthLayout authentication={true}>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                )
            },
            {
                path : '/editPost/:slug',
                element : (
                    <AuthLayout authentication={true}>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                )
            },
            {
                path : '/post/:slug',
                element : (
                    <AuthLayout authentication={true}>
                        <Post />
                    </AuthLayout>
                )
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
