import React, { createContext, useState } from 'react'
import './flash.css'
import ProgressBar from './components/ProgressBar'
import Container from './components/Container'
import Button from './components/Button'
import CardContext from './Context/CardContext'
function App() {
  const [index,setIndex] = useState(0)
  const [show,setShow] = useState(false)
  return (
    <div className='main'>
      <CardContext.Provider value={{
        index,setIndex,show,setShow
      }}>
      <ProgressBar/>
      <Container/>
      <Button/>
      </CardContext.Provider>
    </div>
  )
}

export default App
