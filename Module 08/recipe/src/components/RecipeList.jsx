import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, onRemove }) {
  return (
    <div>
      <h3>Recipes</h3>
      {recipes.length === 0 ? "No recipes Left!!" : ""}
      {recipes.map((r, idx) => (
        <RecipeItem key={idx} recipe={r} onRemove={() => onRemove(idx)} />
      ))}
    </div>
  );
}

export default RecipeList;
