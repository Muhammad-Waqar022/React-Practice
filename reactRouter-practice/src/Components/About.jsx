import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
     navigate('/dashboard')
    }
  return (
    <div>About
        <button onClick={handleClick}>move to Dashboard Page</button>
    </div>
  )
}

export default About