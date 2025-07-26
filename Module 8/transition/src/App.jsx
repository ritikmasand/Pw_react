import { useState, useTransition } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const names = [...Array(10000)].map((_, i) => `Person ${i + 1}`); // created an array for store 10000 person names

function App() {
  const [input, setInput] = useState("");
  const [filteredlist, setFilteredList] = useState(names);
  const [isPending, startTransition] = useTransition();
  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setInput(value);
    startTransition(() => {
      const filtered = names.filter((name) =>
        name.toLowerCase().includes(value) 
      );
      setFilteredList(filtered);
    });
  }
  return (
    <>
      <h2>Search Names</h2>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        placeholder="search..."
      />
      {isPending && <p style={{ color: "orange" }}> Filtering List..... </p>}
      <ul>
        {filteredlist.slice(0, 50).map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
