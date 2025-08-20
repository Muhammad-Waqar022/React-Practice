import React from 'react'
import { useState } from 'react'

const ChangeBg = () => {
    const [bg,setBg]=useState("#111")

    const redBg=()=>{
      setBg("red")
    }
    const blueBg=()=>{
      setBg("blue")
    }
    const greenBg=()=>{
      setBg("green")
    }
  return (
    <>
    <button  onClick={redBg}>Red</button>
    <button  onClick={blueBg}>Blue</button>
    <button  onClick={greenBg}>green</button>
    <div style={{backgroundColor:bg,width:'100px', height:'100px', color:"white" }}>hello</div>
    </>
  )
}
export default ChangeBg