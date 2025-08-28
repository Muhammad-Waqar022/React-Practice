import React, { useRef, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(0)
    let timeRef=useRef(null)

    const startTimer=()=>{
       timeRef.current=setInterval(() => {
            setTime(prev=>prev+1)
        }, 1000);
    }
    const stopTimer=()=>{
        clearInterval(timeRef.current)
        timeRef.current=null
    }
    const resetTimer=()=>{
        stopTimer();
        setTime(0)
    }
  return (
    <div>
        <h3>Time: {time}</h3>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Timer