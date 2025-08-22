import "./App.css";
import CounterApp from "./Components/CounterApp";

function App() {
  return (
    <>
      <div
        id="AppContainer"
        className="flex justify-center items-center w-screen h-screen"
      >
        <div className="flex justify-center items-center border border-transparent bg-gray-600 shadow-2xl rounded-md  w-80 h-60">
          <CounterApp />
        </div>
      </div>
    </>
  );
}

export default App;
