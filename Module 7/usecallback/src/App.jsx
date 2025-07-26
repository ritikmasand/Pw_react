import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child from "./componenet/child";
import { useCallback } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const learning = useCallback(() => {
    // Logic here
  }, [count]);

  return (
    <>
      <button onClick={() => setAdd(add + 1)}>Add: {add}</button>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child learning={learning} />
    </>
  );
}

export default App;
