import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/features/recipes/recipeSlice";

function RecipeList() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.recipes);

  useDispatch(() => {
    if (status === "idle") {
      dispatch(fetchRecipes);
    }
  }, [status, dispatch]);
  if (status === "loading") return <p> Loading Recipes.... </p>;
  if (status === "failed") return <p> Error Loading recipes </p>;
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {list.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} width="150" />
              <p>{recipe.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
