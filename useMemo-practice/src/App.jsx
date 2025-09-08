
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const [input,setInput]=useState(0)

  function expensiveTask(num){
    for(let i=0;i<=100000000;i++){};
    return num*2
  }

  let doubleVal=useMemo(()=>expensiveTask(input),[input])

  
  return (
    <>
      <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <div>
          count:{count}
        </div>
      </div>
      <input type="number" placeholder='enter number' value={input} onChange={(e)=>setInput(e.target.value)}/>

      <div>
        double: {doubleVal}
      </div>
    </>
  )
}

export default App
