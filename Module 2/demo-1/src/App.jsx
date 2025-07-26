import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstComponent from "./Component/FirstComponent";
import ClassComponent from "./Component/ClassComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is the parent component</h1>
      <h3> This is header-3 </h3>
      <p>This is a paragraph</p>
      <span>This is a span tag</span>
      All coming from JSX!!!
      <FirstComponent />
      <ClassComponent/>
    
    </>
  );
}

export default App;
