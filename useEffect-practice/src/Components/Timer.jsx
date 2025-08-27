import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("Timer executed")
            setCount(prev => prev+1)
        },1000)

        return()=>{
            console.log("Time to stop!!");
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        <h1>Seconds: {count}</h1>
    </div>
  )
}

export default Timer