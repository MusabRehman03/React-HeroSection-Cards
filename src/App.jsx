import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'

function App() {
  // const [count, setCount] = useState(0)
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
    <>
      <Navbar />
      <HeroSection x={props}/>
      <Footer/>
  </>
  )
}

export default App
