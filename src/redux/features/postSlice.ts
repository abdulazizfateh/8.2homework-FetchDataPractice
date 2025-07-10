import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPost } from "../../types/types";

const savedPosts = localStorage.getItem("posts");
const initialState: { posts: IPost[] } = {
    posts: savedPosts ? JSON.parse(savedPosts) : []
}
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addToSaved: (state, action: PayloadAction<IPost>) => {
            if (state.posts.some(item => item.id === action.payload.id)) {
                state.posts = state.posts.filter(item => item.id !== action.payload.id);
            } else {
                state.posts.push(action.payload);
            }
        }
    }
})

export const { addToSaved } = postsSlice.actions;
export default postsSlice.reducer;