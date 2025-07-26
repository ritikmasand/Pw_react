import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useFormStatus } from "react-dom";

async function saveData(formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // simulating time-delay
  console.log("Saved Data", formData.get("name"));
}

function App() {
  // const [count, setCount] = useState(0)
  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending}>
        {pending ? "submitting...." : "Submit"}
      </button>
    );
  }
  return (
    <>
      <form action={saveData}>
        <input type="text" name="name" placeholder="Enter your Name" required />
        <SubmitButton />
      </form>
    </>
  );
}

export default App;
