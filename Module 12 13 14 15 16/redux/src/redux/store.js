import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice.js";
import recipeReducer from "./features/recipes/recipeSlice.js";
import logger from "../middleware/logger.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    recipes: recipeReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});
