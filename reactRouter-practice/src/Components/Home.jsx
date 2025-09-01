import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/about')

    }
  return (
    <>
    Home
    <button onClick={handleClick}>Move to About Page</button>
    </>
  )
}

export default Home