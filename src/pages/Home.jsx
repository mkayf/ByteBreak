import React, {useState, useEffect} from 'react'
import {Hero} from '../components'
import {Container, PostCard} from '../components'
import databaseService from '../appwrite/database'

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    databaseService.getAllPosts().then((posts) => {
      if(posts){
        setPosts(posts.documents);
      }
    })
  }, [])

  return (
    <div>
      <Container>
        <Hero/>
        {
          posts.length > 0 ? (
            <div className='w-full py-8'>
              <Container>
                <div className='flex flex-wrap'>
                  {
                    posts.map((post) => (
                      <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                      </div>
                    ))
                  }
                </div>
              </Container>
            </div>
          ) 
          : 
          (
            <div className='w-full py-8 mt-4 text-center'>
              <Container>
                <div className='flex flex-wrap'>
                  <div className='p-2 w-full'>
                    <h1 className='text-2xl font-bold hover: text-gray-500'>Login to read posts</h1>
                  </div>
                </div>
              </Container>
            </div>
          )
        }
      </Container>  
    </div>
  )
}

export default Home