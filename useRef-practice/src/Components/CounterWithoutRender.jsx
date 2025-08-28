import React from 'react'
import { useRef } from 'react'

const CounterWithoutRender = () => {
    let clickRef=useRef(0);

    const handleClick=()=>{
      clickRef.current=clickRef.current+1;
      console.log("Button CLicked",clickRef)
    }
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <p>Check console</p>
    </div>
  )
}

export default CounterWithoutRender