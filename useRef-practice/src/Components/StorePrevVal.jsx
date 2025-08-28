import React, { useEffect, useRef, useState } from 'react'

const StorePrevVal = () => {
    let [text,setText]=useState("")
     const prevRef=useRef("")

    useEffect(()=>{
        prevRef.current=text
    },[text])
  return (
    <div>
        <h3>Previous Value: {prevRef.current}</h3><h3>Current Value: {text}</h3>
        <input placeholder='Write...' type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
    </div>
  )
}

export default StorePrevVal