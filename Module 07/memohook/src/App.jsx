import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [add, setAdd] = useState(0); 
  const [minus, setMinus] = useState(100);
  const multiply = useMemo(
    function () {
      console.log("Multiplication invoked");
      return add * 10;
    },
    [add]
  );

  return (
    <>
      <button onClick={() => setAdd(add + 1)}>Click to add: {add} </button>
      <br />
      {multiply}
      <br />
      <button onClick={() => setMinus(minus - 1)}>
        Click to subtract{minus}
      </button>
    </>
  );
}

export default App;
