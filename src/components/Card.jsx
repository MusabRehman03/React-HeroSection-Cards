import React from 'react'

function Card({y}) {
  return (
    <div className='bg-white rounded-lg w-fit h-fit p-5'>
      <h1 className='text-xl'>Name: {y.name}</h1>
      <h1 className='text-xl '>Age: {y.age}</h1>
    </div>
  )
}

export default Card
