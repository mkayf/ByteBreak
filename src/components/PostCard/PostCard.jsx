import React from 'react'
import storageService from '../../appwrite/storage'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImg}) {
  return (

    // storageService.getFilePreview(featuredImg

    
        <div className="w-60 h-80 bg-neutral-800 rounded-2xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-neutral-900 hover:shadow-2xl hover:shadow-green-600 transition-shadow">
        <div className="w-52 h-40 rounded-xl">
          <img src={'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?uid=R27080097&ga=GA1.1.234027163.1731874358&semt=ais_hybrid'} alt={title} className='rounded-xl' />
        </div>
        <div className="">
            <p className="poppins-medium">{'Coding post'}</p>
        </div>
        {/* <Link to={`/post/${$id}`}> */}
        <button className="bg-green-600 poppins-medium p-2 px-6 rounded-lg hover:bg-green-800 transition-colors cursor-pointer">See post</button>
        {/* </Link> */}
        </div>
  )
}

export default PostCard