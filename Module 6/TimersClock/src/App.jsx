import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Timer from "../component/Timer";

function App() {
  const [timers, setTimers] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTimer = () => {
    // Logic to add timers
    setTimers((prev) => [...prev, nextId]);
    setNextId((prev) => prev + 1);
  };
  const removeTimer = (id) => {
    setTimers((prev) => prev.filter((timerid) => timerid !== id));
  };
  return (
    <>
      <button onClick={addTimer}>Add Timer</button>
      {timers.map((id) => (
        <Timer key={id} id={id} fxn={removeTimer} />
      ))}
    </>
  );
}

export default App;
