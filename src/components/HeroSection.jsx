import React from 'react'
import Card from './Card'
function HeroSection({x}) {

  return (
    
    <div className='bg-gray-700 w-full flex flex-col h-[86vh]'>
       <h1 className='text-7xl font-serif text-white text-center mt-20'>This is Hero Section</h1>
       <h1 className='text-4xl font-serif text-white text-center mt-10'>Learn & Grow in TFT</h1>
      <div className=' h-full w-full flex justify-center items-center space-x-10'> 
      <Card y={x[0]}/>
      <Card y={x[1]}/>
      <Card y={x[2]}/>
      </div> 
    </div>
  )
}

export default HeroSection
