import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Red from "./components/Red";
import MessageBox from "./components/MessageBox";
import useInternetStatus from "./hooks/useInternetStatus";

function App() {
  const [count, setCount] = useState(0);
  const internetConnected = useInternetStatus();
  return (
    <>
      {/* HOC */}
      {/* <Red color="blue">
        <p> Ths is a para</p>
      </Red>
     <Red>
        <button> Click Me </button>
      </Red>
      <Red>
        <h2 >Heading</h2>
        <h3>Another Heading</h3>
      </Red> */}

      {/* Render Function */}
      {/* <h1> Render Function Example </h1>
       <MessageBox>
       {(isHappy)=>(
          <p> {isHappy? '😁 I am feeling Happy today': ' 😔 Not a Good day'} </p>
       )}
       </MessageBox> */}

      <h2>
        {internetConnected ? "🛜 Internet Connected" : " ❌🛜No Internet"}
      </h2>
    </>
  );
}

export default App;
