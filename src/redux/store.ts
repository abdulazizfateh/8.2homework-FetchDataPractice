import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./features/quoteSlice";
import productReducer from "./features/productSlice";
import commentReducer from "./features/commentSlice";
import userReducer from "./features/userSlice";
import postReducer from "./features/postSlice";
import recipeReducer from "./features/recipeSlice";

export const store = configureStore({
    reducer: {
        quoteReducer,
        productReducer,
        commentReducer,
        userReducer,
        postReducer,
        recipeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("quotes", JSON.stringify(state.quoteReducer.quotes));
    localStorage.setItem("products", JSON.stringify(state.productReducer.products));
    localStorage.setItem("comments", JSON.stringify(state.commentReducer.comments));
    localStorage.setItem("users", JSON.stringify(state.userReducer.users));
    localStorage.setItem("posts", JSON.stringify(state.postReducer.posts));
    localStorage.setItem("recipes", JSON.stringify(state.recipeReducer.recipes));
})