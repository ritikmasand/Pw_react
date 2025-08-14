import { fetchRecipes } from "../redux/features/recipes/recipeSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
export default function DemoList() {

  
  
  const dispatch = useDispatch();
   const { list, status, error } = useSelector((state) => state.recipes);
   console.log(list);
  useEffect(() => {
    dispatch(fetchRecipes()); // triggers pending → fulfilled/rejected
  }, [dispatch]);
  if (status === "loading") return <p>Loading recipes...</p>;
  if (status === "failed") return <p>Failed to load recipes.</p>;
  return (
    <ul>
      {" "}
      {list.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}{" "}
    </ul>
  );
}
