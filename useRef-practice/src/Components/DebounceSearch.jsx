import React, { useRef, useState } from 'react'

const DebounceSearch = () => {
    const [text,setText]=useState("")
    let timeoutRef=useRef(null);

    const handleChange=(e)=>{
        setText(e.target.value)
        timeoutRef.current=setTimeout(()=>{
            console.log("Search Term:",e.target.value)
        },500)
    }


  return (
    <div>
        <input type="text" value={text}  onChange={handleChange}  />
    </div>
  )
}

export default DebounceSearch