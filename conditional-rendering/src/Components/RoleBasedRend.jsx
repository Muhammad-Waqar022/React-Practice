import React, { useState } from 'react'

const RoleBasedRend = () => {
    const [current,setCurrent]=useState("admin")
    const handleClick=()=>{
        setCurrent("user");
    }
  return (
    <div>
        {current =="admin"?"Welcome Admin, you have full access":current =="user"?"Welcome User, limited access":""}
        <button onClick={handleClick}>Click button to Change Role</button>
    </div>
  )
}

export default RoleBasedRend