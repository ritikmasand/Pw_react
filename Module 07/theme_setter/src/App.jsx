import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeContext } from "./ThemeContext";
import Home from "./assets/component/Home";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
          <Home />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
