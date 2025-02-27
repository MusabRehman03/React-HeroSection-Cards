import React from 'react'
import HeroSection from './HeroSection'
function Home() {
    let props = [{
        name : "musab",
        age : 20
      },
       { name : "ali",
      age : 30},
      { name : "ahmad",
        age : 35}
    ]
  return (
    <div>
        <HeroSection x={props}/>
     
    </div>
  )
}

export default Home
