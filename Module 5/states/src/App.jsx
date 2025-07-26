import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 1. States using class based components

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = { count:0 }
//   }
//    Increment=()=>{
//     this.setState({count:this.state.count+1})
//    }
//   render(){
//     return(
//       <div>
//         <h1>Welcome to class based state component</h1>
//          <p>Clicked {this.state.count} times</p>
//          <button onClick={this.Increment}>Click Me</button>
//       </div>
//     )
//   }
// }

// 2. Counter Project

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ text: e.target.value });
//   };

//   render() {
//     const text = this.state.text;
//     const charcount = text.length;

//     return (
//       <div>
//         <h2>Character Count</h2>
//         <textarea
//           rows="5"
//           cols="20"
//           placeholder="Type your post here..."
//           value={text}
//           onChange={this.handleChange}
//         ></textarea>
//         <p>Character count: {charcount}</p>
//       </div>
//     );
//   }
// }

// export default App;

// 3. States with functional components.

import React from "react";

function App() {
  const [count, setCount] = useState(0); //

  function inc() {
    // incremet logic
    setCount(count + 1);
  }
  function dec() {
    // decrement logic
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      {count}
    </div>
  );
}

export default App;
