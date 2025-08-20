import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <p>count is: {count}</p>
        <button onClick={()=>{setCount(count+1)}} >Increase</button>
        <button onClick={()=>{setCount(count-1)}}>decrease</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Counter