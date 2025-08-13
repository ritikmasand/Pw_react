import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };
  const removeRecipe = (index) => {
    // logic
    setRecipes((prev) => prev.filter((_, i) => i !== index)); 
  };
  return (
    <>
      <h2>🍽️ Recipe App</h2>
      <RecipeForm onAdd={addRecipe} />
      <RecipeList recipes={recipes} onRemove={removeRecipe} />
    </>
  );
}

export default App;
