import './App.css'
import Notification from './Components/Notification'
import RoleBasedRend from './Components/RoleBasedRend'
import Subscribe from './Components/Subscribe'

function App() {
  return (
    <>
    <div>
      <h3>Notification:</h3>
      <Notification />
    </div>
    <div>
      <h3>Role Based Rendering:</h3>
      <RoleBasedRend />
    </div>
    <div>
      <h3>Subscribe Conditional Rendering:</h3>
      <Subscribe />
    </div>

    </>
  )
}

export default App
