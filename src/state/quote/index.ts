import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteState } from "state/types";

const initialState: QuoteState = {
    quotes: {},
    slippageTolerance: 0.1
}
const quoteSlice = createSlice({
    name: "quoteReducer",
    initialState,
    reducers: {
        setQuotes: (state, action: PayloadAction<any>) => {
            state.quotes = action.payload;
        },
        setSlippagetolerance: (state, action: PayloadAction<number>) => {
            state.slippageTolerance = action.payload;
        }

    }
});

export const { setQuotes, setSlippagetolerance } = quoteSlice.actions;
export default quoteSlice.reducer;