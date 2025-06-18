import React from 'react'
import Carousel from '../Components/Carousel'
import MidBanner from '../Components/MidBanner'
import Features from '../Components/Features'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Carousel />
      <MidBanner />
      <Features />
    </div>
  )
}

export default Home