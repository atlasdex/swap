import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteInitialState } from "state/types";

const initialState: QuoteInitialState = {
    quotes: {}
}
const quoteSlice = createSlice({
    name: "quoteReducer",
    initialState,
    reducers: {
        setQuotes: (state, action: PayloadAction<any>) => {
            state.quotes = action.payload;
        }

    }
});

export const { setQuotes } = quoteSlice.actions;
export default quoteSlice.reducer;