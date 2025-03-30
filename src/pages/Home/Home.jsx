import React from 'react'
import Hero from '../../components/Hero/Hero'
import {Container, PostCard} from '../../components/'

function Home() {
  return (
    <div>
      <Container>
        <Hero/>
        <PostCard/>
      </Container>  
    </div>
  )
}

export default Home