import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {LogoutBtn} from '../index'

function Header() {

  const authStatus = useSelector(state => state.auth.status);

  const navItems = [
    {
      name : 'Home',
      URL : '/',
      active : true
    },
    {
      name : 'Login',
      URL : '/login',
      active : !authStatus
    },
    {
      name : 'Signup',
      URL : '/signup',
      active : !authStatus
    },
    {
      name : 'All posts',
      URL : '/posts',
      active : authStatus
    },
    {
      name : 'Add post',
      URL : '/add-post',
      active : authStatus
    },
  ]

  return (
    <nav className="bg-transparent w-full z-10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <a  className="flex-shrink-0 flex items-center">
                      <Logo />
                    </a>
                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                      {/* {
                        navItems.map((item, i) => (
                          item.active ? (
                            <Link to="/" key={i}>
                              <span  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                              {item.name}
                              </span>
                            </Link>
                          )
                          :
                          null
                        ))
                      } */}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="hidden md:ml-4 md:flex md:items-center">
                      <LogoutBtn/>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:hidden hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
            {/* {
              navItems.map((item, i) => (
                  item.active ? (
                    <Link to="/" key={i}>
                      <span  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                      {item.name}
                      </span>
                    </Link>
                  )
                  :
                  null
                ))
              }   */}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <LogoutBtn/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header