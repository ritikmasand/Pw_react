import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRecipes } from "../redux/features/recipes/recipeSlice";


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

  if (status === "loading") return <p> Loading Recipes.... </p>;
  if (status === "failed") return <p> Error Loading recipes {error} </p>;
  if (!recipe) return <p> Recipe Not Found </p>;
  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} width={300} />
      <h4>Ingredients: </h4>
      <ul>
        {recipe.ingredients.map((ing, ind) => (
          <li key={ind}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
