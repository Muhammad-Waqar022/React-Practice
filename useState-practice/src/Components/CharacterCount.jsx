import React from 'react'
import { useState } from 'react'

const CharacterCount = () => {
    const [count,setCount]=useState("");

    const counter=(e)=>{
     setCount(e.target.value)
    }
    const charCount = count.replace(/\s/g, "").length;
  return (
    <div>
        
        <p>Words are: {count}</p>
        <p>word count: {charCount} </p>
        <input type="text" onChange={counter} value={ count} />
    </div>
  )
}

export default CharacterCount