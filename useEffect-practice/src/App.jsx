import {useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Timer from "./Components/TImer";
import DataFetcher from "./DataFetcher";

function App() {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!shows)}>Toggle</button>
      {shows ? <Counter /> : ""}

      <Counter />
      <Timer />
      <DataFetcher />
    </>
  );
}

export default App;
