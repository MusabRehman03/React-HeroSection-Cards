import React, { useState } from 'react'

const Form = () => {
    const [data,setData]=useState({
        name:"",
        age:""
    })
    function handleData(e){
        const name=e.target.name
        const value=e.target.value
        return (setData((prevData)=>({
            ...prevData,
            [name]:value
        })))
        
    }
    // function handleName(e) {
    //     setName(e.target.value)
    // }
    // function handleAge(e){
    //     setAge(e.target.value)
    // }
    function handleSubmit(){
        
        console.log(data.name)
        console.log(data.age)
        if(data.age>90){
            alert("invalid age")
        }
        
    }
  return (
    <div className=' h-screen bg-black space-x-10'>
      <input name='name' value={data.name} onChange={handleData} className= 'border border-b border-b-black rounded-xl px-3 py-1 focus:outline-none' type="text" />
      <input name='age' value={data.age} onChange={handleData} className= 'border border-b border-b-black rounded-xl px-3 py-1 focus:outline-none' type="number" />
      <button className='bg-green-500 text-black px-3 py-1 rounded-xl'  onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form
