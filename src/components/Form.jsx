import React from 'react'

const Form = () => {
    
  return (
    <div className=' h-screen bg-black space-x-10'>
      <input className= 'border border-b border-b-black rounded-xl px-3 py-1 focus:outline-none' type="text" />
      <input className= 'border border-b border-b-black rounded-xl px-3 py-1 focus:outline-none' type="number" />
    </div>
  )
}

export default Form
