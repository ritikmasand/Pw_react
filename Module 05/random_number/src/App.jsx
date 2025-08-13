import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  function generatenum() {
    const random = Math.floor(Math.random() * 100);
    //  console.log(random);
     setNumber(random)
  }
  return (
    <>
      <h2>Plot a randon number</h2>
      <button onClick={generatenum}>Generate</button>
      <br />
      {number}
    </>
  );
}

export default App;
