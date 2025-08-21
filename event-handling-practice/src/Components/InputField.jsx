import React from 'react'
import { useState } from 'react'

const InputField = () => {
    const [text,newText]=useState()
    const handleClick=(e)=>{
        newText(e.target.value)
    }
  return (
    <div>
        <p>Text: {text}</p>
        <input type="text" value={text} onChange={handleClick}/>
    </div>
  )
}

export default InputField