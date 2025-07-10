import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IComment } from "../../types/types";

type InitialState = {
    comments: IComment[];
}

const savedComments = localStorage.getItem("comments");
const initialState: InitialState = {
    comments: savedComments ? JSON.parse(savedComments) : []
}

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addToSaved: (state, action: PayloadAction<IComment>) => {
            const doesExist = state.comments.some(item => item.id === action.payload.id);
            if (doesExist) {
                state.comments = state.comments.filter(i => i.id !== action.payload.id)
            } else {
                state.comments.push(action.payload);
            }
        }
    }
})

export const { addToSaved } = commentSlice.actions;
export default commentSlice.reducer;