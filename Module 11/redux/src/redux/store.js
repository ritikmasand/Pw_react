import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice";
import recipesReducer from './features/recipes/recipeSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    recipes: recipesReducer
  },
});
