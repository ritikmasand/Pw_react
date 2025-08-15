import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data.recipes;
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        (state.status = "succeeded"), (state.list = action.payload);
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = "Failed";
      });
  },
});

export default recipeSlice.reducer;
