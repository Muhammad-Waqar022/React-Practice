import React from 'react'

const Subscribe = () => {
    let subscribe=true
  return (
    <div>
        {subscribe?<button>Unsubscribe</button>:""}
    </div>
  )
}

export default Subscribe