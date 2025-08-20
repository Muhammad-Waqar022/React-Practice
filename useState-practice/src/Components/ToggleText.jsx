import React from 'react'
import { useState } from 'react'

const ToggleText = () => {
    const [value,setValue]=useState(true)

    const toggle=(e)=>{
        setValue(!value)
    }
  return (
    <div>
        <input type="text" value={value?"Hello Waqar!":" "} readOnly/>
        <button onClick={toggle}>Click to Toggle Text</button>
    </div>
  )
}

export default ToggleText