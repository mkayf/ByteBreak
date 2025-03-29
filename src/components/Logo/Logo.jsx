import React from 'react'

function Logo({
    fontsize = '2rem',
    color = '#4CAF50'
})
 {
  return <h6 style={{fontSize : fontsize,}} className='font-bold text-green-500'>ByteBreak.</h6>
}


export default Logo