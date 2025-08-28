import { useRef, useState } from "react";
import FocusInput from "./Components/FocusInput";
import CounterWithoutRender from "./Components/CounterWithoutRender";
import AccessDomHeight from "./Components/AccessDomHeight";
import StorePrevVal from "./Components/StorePrevVal";
import './App.css'
import Timer from "./Components/Timer";


function App() {
  return (
    <>
      <div className="div">
        <h2>Click Button to Focus Input:</h2>
        <FocusInput/>
      </div>
      <div className="div">
        <h2>Count Button Clicks Without Re-rendering:</h2>
        <CounterWithoutRender/>
      </div>
      <div className="div">
        <h2>Access DOM Element Height:</h2>
        <AccessDomHeight/>
      </div>
      <div className="div">
        <h2>Store Previous Value</h2>
        <StorePrevVal/>
      </div>
      <div className="div">
        <h2>Timer</h2>
        <Timer/>
      </div>
    </>
  );
}

export default App;
