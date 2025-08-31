import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const styling = {
    color: "red",
    fontWeight: "bold",
  };
  return (
    <>
      <div style={{ backgroundColor: "orange", borderRadius: "40px" }}>
        <h1 style={styling}>Welcome to Inline CSS</h1>
        
      </div>
    </>
  );
}

export default App;
