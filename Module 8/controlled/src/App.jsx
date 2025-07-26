import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import Test from "./component/Test";

function App() {
  const testref = useRef();
  
  const btnclicked = () => {
    console.log(testref.current);
  };

  return (
    <>
      {/* <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form> */}

      <Test ref={testref} />
      <button onClick={btnclicked}>Console</button>
    </>
  );
}

export default App;
