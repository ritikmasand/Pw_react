import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch recipes from DummyJSON
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data.recipes; // returning array of recipes
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    list: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
