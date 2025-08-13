import React from "react";
import { useSearchParams } from "react-router-dom";

function GreetUser() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name" || "Guest");
  const handleSubmit = () => {
    setSearchParams({ name: "Ritik" });
  };
  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={handleSubmit}>Set name to Ritik</button>
    </div>
  );
}

export default GreetUser;
