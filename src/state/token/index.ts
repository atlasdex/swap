import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { IToken } from "interfaces/IToken"; 
import { TokenState } from "state/types";
const initialState: TokenState = {
    tokens: [],  
};

export const tokenSlice = createSlice({
    name: "tokenState",
    initialState,
    reducers: {
        setTokens: (state: TokenState, action: PayloadAction<IToken[]>) => {
            state.tokens = action.payload
        }, 
    }

});

export const { setTokens } = tokenSlice.actions;

export default tokenSlice.reducer;