import React, { useContext, useState } from 'react'
import Data from './Data'
import CardContext from '../Context/CardContext'

function Container() {

    const {index,setIndex,show,setShow} = useContext(CardContext)
  

  return (
    <div>
            <p>{Data[index].question}</p>
            <p>{show && Data[index].answer}</p>
        </div>
     

  )
}

export default Container
