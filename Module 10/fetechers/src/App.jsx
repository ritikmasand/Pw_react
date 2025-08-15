import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Router Fetcher Example</h1>
      <nav>
        <Link to="/post/1"> Go to Post 1 </Link>
      </nav>
      <Outlet/>
    </>
  );
}

export default App;
