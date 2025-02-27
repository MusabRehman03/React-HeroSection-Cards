import React from 'react'
import Mybutton from './MyButton'
import {useState} from 'react'
import ParagraphOfTabs from './ParagraphOfTabs'
function Tabs() {
    const [a,setA]=useState(false)
    const [b,setB]=useState(false)
    const [c,setC]=useState(false)
    const [d,setD]=useState(false)
    function handleA(){
        setA(true)
        setB(false)
        setC(false)
        setD(false)
    }
    function handleB(){
        setA(false)
        setB(true)
        setC(false)
        setD(false)
    }
    function handleC(){
        setA(false)
        setB(false)
        setC(true)
        setD(false)
    }
    function handleD(){
        setA(false)
        setB(false)
        setC(false)
        setD(true)
    }


  return (
    <div>
      <Mybutton text={'A'} fn={handleA} value={a? 'bg-blue-400': 'bg-black'}/>
      <Mybutton text={'B'} fn={handleB} value={b? 'bg-blue-400': 'bg-black'}/>
      <Mybutton text={'C'} fn={handleC} value={c? 'bg-blue-400': 'bg-black'}/>
      <Mybutton text={'D'} fn={handleD} value={d? 'bg-blue-400': 'bg-black'}/>
      {a? <ParagraphOfTabs value={'A'}/> : null}
      {b? <ParagraphOfTabs value={'B'}/> : null}
      {c? <ParagraphOfTabs value={'C'}/> : null}
      {d? <ParagraphOfTabs value={'D'}/> : null}
    </div>
  )
}

export default Tabs
