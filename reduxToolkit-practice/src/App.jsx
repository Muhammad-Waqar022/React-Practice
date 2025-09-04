
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './redux/counter/counter'
import Navbar from './Componets/Navbar'


function App() {
const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
     <div>
      <Navbar/>
      <button onClick={()=>dispatch(decrement())}>-</button>
      currently count is {count}
      <button onClick={()=>dispatch(increment())}>+</button>
     </div>
    </>
  )
}

export default App
