import { useRef, useState } from "react";
import FocusInput from "./Components/FocusInput";
import CounterWithoutRender from "./Components/CounterWithoutRender";
import AccessDomHeight from "./Components/AccessDomHeight";


function App() {
  return (
    <>
      <div>
        <h2>Click Button to Focus Input:</h2>
        <FocusInput/>
      </div>
      <div>
        <h2>Count Button Clicks Without Re-rendering:</h2>
        <CounterWithoutRender/>
      </div>
      <div>
        <h2>Access DOM Element Height:</h2>
        <AccessDomHeight/>
      </div>
    </>
  );
}

export default App;
