import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./component/MyComponent";
import MyArray from "./component/MyArray";

function App() {
  const arr = [1, 2, 3, 4, 5];
  const names = ["Ritik", "Anshul", "Prachi", "Sam"];
  function btn_Clicked(e) {
    console.log(e);
    alert("Button has been clicked");
  }
  return (
    <>
      {names.map((elem,ind) => (
        <ul>
          <li key={ind}>{elem}</li>
        </ul>
      ))}
      <MyComponent array={arr} />
      <MyArray caption="Click Me coming from App.jsx" />
      <button onClick={btn_Clicked}>Click Me</button>
    </>
  );
}

export default App;
