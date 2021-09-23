import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteState } from "state/types";

const initialState: QuoteState = {
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