import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IRecipe } from "../../types/types";

const savedRecipes = localStorage.getItem("recipes");
const initialState: { recipes: IRecipe[] } = {
    recipes: savedRecipes ? JSON.parse(savedRecipes) : []
}

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        addToSaved: (state, action: PayloadAction<IRecipe>) => {
            if (state.recipes.some(item => item.id === action.payload.id)) {
                state.recipes = state.recipes.filter(item => item.id !== action.payload.id);
            } else {
                state.recipes.push(action.payload);
            }
        }
    }
})

export const { addToSaved } = recipesSlice.actions;
export default recipesSlice.reducer;