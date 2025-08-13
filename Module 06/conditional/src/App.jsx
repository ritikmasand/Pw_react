import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DashComp from "./components/dashComp";
import LoginComp from "./components/loginComp";

function App() {
  const [Isloggedin, setIsloggedin] = useState(false);
  function toggleLogin() {
    setIsloggedin(!Isloggedin);
  }
  return (
    <>
      <h1>Conditional Rendering</h1>
      <button onClick={toggleLogin}> {Isloggedin ? "Logout" : "Login"} </button>
      {Isloggedin ? <DashComp /> : <LoginComp />}
    </>
  );
}

export default App;
