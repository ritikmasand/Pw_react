import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setfahrenheit] = useState("");
  function handlefahrenheit(e) {
    const value = e.target.value;
    setfahrenheit(value);
    setCelsius((value - 32) * (5 / 9));
  }
  function handlecelsius(e) {
    const value = e.target.value;
    setCelsius(value);
    setfahrenheit((value * (9 / 5) + 32));
  }
  return (
    <>
      <h2>Temperature Convertor🌡️</h2>
      F:
      <input type="number" value={fahrenheit} onChange={handlefahrenheit} />
      C:
      <input type="number" value={celsius} onChange={handlecelsius} />
    </>
  );
}

export default App;
