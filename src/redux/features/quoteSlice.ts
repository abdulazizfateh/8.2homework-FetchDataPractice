import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { IQuote } from "../../types/types"

type InitialState = {
    quotes: IQuote[]
}
const savedQuotes = localStorage.getItem("quotes");
const initialState: InitialState = {
    quotes: savedQuotes ? JSON.parse(savedQuotes) : []
}

const quoteSlice = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        addToSaved: (state, action: PayloadAction<IQuote>) => {
            const doesExist = state.quotes.some(item => item.id === action.payload.id);
            if (doesExist) {
                state.quotes = state.quotes.filter(item => item.id !== action.payload.id);
            } else {
                state.quotes.push(action.payload);
            }
        }
    }
})

export const { addToSaved } = quoteSlice.actions;
export default quoteSlice.reducer;