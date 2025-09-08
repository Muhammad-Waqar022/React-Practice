import { useCallback, useState } from 'react'
import './App.css'
import ChildCompontent from './Components/ChildCompontent'

function App() {
  const [count,setCount]=useState(0)

  const handleClick=useCallback(()=>{
    setCount(count+1)
  },[count])
  return (
    <>
     <div>
      <div>
        count:{count}
      </div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
<br/><br/>
<div>
  <ChildCompontent handleClick={handleClick} buttonName="Click me"/>
</div>
     </div>
    </>
  )
}

export default App
