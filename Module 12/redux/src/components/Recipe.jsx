import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from '../redux/features/recipes/recipeSlice'
function Recipe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  const recipe = list.find((r) => r.id === parseInt(id));

  if (status === "loading") return <p>Loading recipe...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} width="300" />
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default Recipe;
