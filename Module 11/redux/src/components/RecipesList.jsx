import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../features/recipes/recipesSlice";
import { Link } from "react-router-dom";

function RecipesList() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading recipes...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Recipes</h2>
      <ul>
        {list.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} width="150" />
              <p>{recipe.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipesList;
