import Counter from './Components/Counter'
import ToggleText from './Components/ToggleText'
import ChangeBg from './Components/ChangeBg'
import FormInput from './Components/FormInput'
import CharacterCount from './Components/CharacterCount'

import './App.css'

function App() {
  return (
    <div class="container">
      
    <div id='Counter'>
      <h2>Counter: </h2>
      <Counter />
    </div>
    <div id='toogleText'>
      <h2>Toogle text: </h2>
      <ToggleText />
    </div>
    <div id='ChangeBg'>
      <h2>Change Div Background Color: </h2>
      <ChangeBg />
    </div>
    <div id="formInput">
      <h2>Write Some text in Input: </h2>
      <FormInput />
    </div>
    <div id="characterCount">
      <h2>Character Count: </h2>
      <CharacterCount />
    </div>
    </div>
  )
}

export default App
