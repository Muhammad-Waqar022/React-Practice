import React from 'react'
import { useState } from 'react'

const MouseOverAndOut = () => {
    const [current,setCurrent]=useState("white")
  return (
    <div style={{width:"150px",height:"100px",backgroundColor:current}} onMouseOver={()=>{setCurrent("yellow")}} onMouseOut={()=>{setCurrent("white")}}>
    </div>
  )
}

export default MouseOverAndOut