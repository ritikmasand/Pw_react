import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";

const Ritik = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Ritik primary="true"> Click Me </Ritik>
      <Ritik> Click Me 2 </Ritik>
    </>
  );
}

export default App;
