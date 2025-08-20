import React from 'react'
import { useState } from 'react'

const FormInput = () => {
    const [val,setVal]=useState("hello")
    
    const handleClick=(e)=>{
    setVal(e.target.value)

    }
  return (
    <div>
        <h2>Text is: {val}</h2>
        <input type="text" onChange={handleClick} value={val} />

    </div>
  )
}

export default FormInput