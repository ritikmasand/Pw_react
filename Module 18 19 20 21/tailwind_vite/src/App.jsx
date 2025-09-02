import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Buttons from "./components/Buttons";
import Flexbox from "./components/Flexbox";
import Grid from "./components/Grid";
import Container from "./components/Container";
import Arbitary from "./components/Arbitary";
import ProductCard from "./components/ProductCard";
import Dark from "./components/Dark";
import Theme from "./components/Theme";
import Apply from "./components/Apply";
import ExpenseTracker from "./components/ExpenseTracker";
import Transitions from "./components/Transitions";
import Utility from "./components/Utility";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="bg-gray-500/70  flex justify-center items-center border-2 min-h-screen p-4">
        <ProfileCard /> 
      </div> */}

      {/* <Buttons /> */}
      {/* <Flexbox/> */}
      {/* <Grid/> */}
      {/* <Container/> */}
      {/* <Arbitary/> */}
      {/* <ProductCard/> */}
      {/* <Dark/> */}
      {/* <Theme /> */}
      {/* <Apply /> */}
      {/* <Transitions/> */}
      <Utility/>
    {/* <ExpenseTracker/> */}
    </>
  );
}

export default App;
