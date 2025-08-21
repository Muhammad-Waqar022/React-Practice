import React from 'react'
import { useState } from 'react'

const FormSubmission = () => {
    const [text,setText]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Name:</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button type='submit'>Submit</button>
            <p >text is: {text}</p>
        </form>
        
    </div>
  )
}

export default FormSubmission