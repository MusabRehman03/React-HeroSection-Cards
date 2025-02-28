import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState('Musab')
    const [age,setAge]=useState('20')
    function handleName(e) {
        setName(e.target.value)
    }
    function handleAge(e){
        setAge(e.target.value)
    }
    function handleSubmit(){
        console.log("name: ",name);
        console.log("age: ",age);

        
    }
  return (
    <div className=' h-screen bg-black space-x-10'>
      <input value={name} onChange={handleName} className= 'border border-b border-b-black rounded-xl px-3 py-1 focus:outline-none' type="text" />
      <input value={age} onChange={handleAge} className= 'border border-b border-b-black rounded-xl px-3 py-1 focus:outline-none' type="number" />
      <button className='bg-green-500 text-black px-3 py-1 rounded-xl'  onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form
