import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRate } from "interfaces/IRate";
import { RateState } from "state/types";
const initialState: RateState = {
    rates: []
}
const rateSlice = createSlice({
    name: "rates",
    initialState,
    reducers: {
        setRates: (state, action: PayloadAction<IRate[]>) => {
            state.rates = action.payload
        }
    }
});
export const { setRates } = rateSlice.actions;
export default rateSlice.reducer;