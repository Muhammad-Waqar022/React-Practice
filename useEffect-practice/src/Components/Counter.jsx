import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("Component Mounted!");
        return ()=>{
            console.log("Component Unmounted!")
        }
    })
    useEffect(()=>{
        console.log("Component Mounted 2!");
    },[count])
  return (
    <div>
        <p>count is {count}</p>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <button onClick={()=>setCount(count-1)}>Dec</button>
    </div>
  )
}

export default Counter