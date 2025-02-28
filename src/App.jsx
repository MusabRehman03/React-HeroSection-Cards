
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Tabs from './components/Tabs'
import Form from './components/Form'
function App() {

  return (
    <>
      {/* <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      <Footer/> */}
      {/* <Tabs/> */}
      <Form/>
  </>
  )
}

export default App
