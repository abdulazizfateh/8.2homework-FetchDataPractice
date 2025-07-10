import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { IUser } from "../../types/types"

const savedUsers = localStorage.getItem("users");
const initialState: { users: IUser[] } = {
    users: savedUsers ? JSON.parse(savedUsers) : []
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addToSaved: (state, action: PayloadAction<IUser>) => {
            if (state.users.some(item => item.id === action.payload.id)) {
                state.users = state.users.filter(item => item.id !== action.payload.id)
            } else {
                state.users.push(action.payload);
            }
        }
    }
})

export const { addToSaved } = usersSlice.actions;
export default usersSlice.reducer;