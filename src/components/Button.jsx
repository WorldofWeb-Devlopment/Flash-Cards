import React, { useContext } from 'react'
import CardContext from '../Context/CardContext'

function Button() {

     const {index,setIndex,show,setShow} = useContext(CardContext)
  return (
    <div className='nav-btn'>
      <button onClick={()=>setIndex(Math.max(0,index-1))}>Prev</button>
      <button onClick={()=>setShow(!show)}>{show?"Hide Answer":"Show Answer"}</button>
      <button onClick={()=>setIndex(index+1)}>Next</button>
    </div>
  )
}

export default Button
