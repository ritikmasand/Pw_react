import React from "react";

function RecipeItem({ recipe, onRemove }) {
  return (
    <div
      style={{ border: "1px solid orange", padding: "10px", marginTop: "10px" }}
    >
      <h4>{recipe.name}</h4>
      <p>
        <strong> Indgredients: </strong> {recipe.indgredients}
      </p>
      <p>
        <strong> Cooking Time: </strong> {recipe.time} mins
      </p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default RecipeItem;
