import { useEffect, useState } from "react";
import "./App.css";
import Child from "./component/Child";
import Child2 from "./component/Child2";

function App() {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    // Mounting Phase
    console.log("Parent Mounted");
  }, []);

  useEffect(()=>{
    // Updating Phase
    console.log('Parent Updated');
    
  },[showChild])

  // function fxn() {
  //   setValue(value + 1);
  // }
  return (
    <div>
      <h1>Understanding the lifecycle (Unmounting)</h1>
      {/* <button onClick={fxn}>Click Me</button> */}
       <input type="checkbox" onChange={(e)=>setShowChild(e.target.checked)}/>
      {/* <br /> */}
      {showChild===true? <Child2/>: false}
      {/* <Child value={value}/> */}
    </div>
  );
}

export default App;
