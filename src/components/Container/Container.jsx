import React from 'react'

function Container({children}) {
  return (
    <div className='w-full px-12 py-10'>
        {children}
    </div>
  )
}

export default Container