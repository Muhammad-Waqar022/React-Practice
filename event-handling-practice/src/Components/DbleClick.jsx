import React from 'react'
import { useState } from 'react'

const DbleClick = () => {
    const [text,setText]=useState("Double Click me")
  return (
    <div>
        <button onDoubleClick={()=>{setText("You double clicked me!")}}>{text}</button>
    </div>
  )
}

export default DbleClick