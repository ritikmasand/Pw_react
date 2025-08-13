import React, { useState, useTransition } from "react";
import { number, z } from "zod";

const recipeSchema = z.object({
  name: z.string().min(1, "Recipe name is Required"),
  indgredients: z.string().min(10, "Add More indgredients"),
  time: z.number().min(1, "Cooking time must be more than 0"),
});

function RecipeForm({ onAdd }) {
  const [name, setName] = useState("");
  const [indgredients, setIndgredients] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = recipeSchema.safeParse({
      name,
      indgredients,
      time: Number(time),
    });
    if (!result.success) {
      const fieldError = {};
      result.error.issues.forEach((err) => {
        fieldError[err.path[0]] = err.message;
      });
      setErrors(fieldError);
      return;
    }
    setErrors({});

    startTransition(() => {
      onAdd({
        name,
        indgredients,
        time: Number(time),
      });
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a recipe</h2>
      <input
        type="text"
        value={name}
        placeholder="Recipe Name"
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <textarea
        placeholder="Add Indgredients"
        value={indgredients}
        onChange={(e) => setIndgredients(e.target.value)}
      />
      <p>{indgredients.length} characters</p>
      {errors.indgredients && (
        <p style={{ color: "red" }}>{errors.indgredients}</p>
      )}
      <input
        type="number"
        placeholder="Cooking Time (mins)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? "Adding..." : "Add Recipe"}
      </button>
    </form>
  );
}

export default RecipeForm;
