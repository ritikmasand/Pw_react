import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  function saveName(prevState, formData) {
    console.log(prevState);

    const name = formData.get("name");
    return `Hello, ${name}`;
  }

  const [message, formAction, isPending] = React.useActionState(saveName, "");

  return (
    <>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter your Name" />
        <button type="submit">Greet</button>
        {message}
        {isPending ? "Loading....." : message}
      </form>
    </>
  );
}

export default App;
