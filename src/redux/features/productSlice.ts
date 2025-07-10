import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/types"

type InitialState = {
    products: IProduct[];
}
const savedProducts = localStorage.getItem("products");
const initialState: InitialState = {
    products: savedProducts ? JSON.parse(savedProducts) : []
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToSaved: (state, action: PayloadAction<IProduct>) => {
            const doesExist = state.products.some(item => item.id === action.payload.id);
            if (doesExist) {
                state.products = state.products.filter(item => item.id !== action.payload.id);
            } else {
                state.products.push(action.payload);
            }
        }
    }
})

export const { addToSaved } = productsSlice.actions;
export default productsSlice.reducer;