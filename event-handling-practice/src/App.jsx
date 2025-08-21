import './App.css'
import BtnClickAlert from './Components/BtnClickAlert'
import DbleClick from './Components/DbleClick'
import MouseOverAndOut from './Components/MouseOverAndOut'
import InputField from './Components/InputField'
import FormSubmission from './Components/FormSubmission'
import KeyPress from './Components/KeyPress'
function App() {
  return (
    <>
    <div id="clickBtnAlert">
      <h3>Click for Alert</h3>
      <BtnClickAlert />
    </div>
    <div id="DblClick">
      <h3>Double click  for text change:</h3>
      <DbleClick />
    </div>
    <div id="mouseOverAndOut">
      <h3>Take the mouse in the div</h3>
      <MouseOverAndOut />
    </div>
    <div id="InputField">
      <h3>Write text in Input Field</h3>
      <InputField />
    </div>
    <div id="FormSubmission">
      <h3>Write in Input Field and Submit</h3>
      <FormSubmission />
    </div>
    <div id="FormSubmission">
      <h3>Press any Key For alert</h3>
      <KeyPress />
    </div>
    </>
  )
}

export default App
