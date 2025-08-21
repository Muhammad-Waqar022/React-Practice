import React from 'react'

const KeyPress = () => {
  return (
    <div>
        <input type="text" onKeyDown={()=>{alert("You pressed the key!")}}/>
    </div>
  )
}

export default KeyPress