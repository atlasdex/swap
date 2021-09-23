import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NetworkChainId } from "config/constants/types";
import { IToken } from "interfaces/IToken";
import { useSetTokenState } from "state/hooks";
import { TokenState } from "state/types";
const initialState: TokenState = {
    tokens: [], 
    networkChain:NetworkChainId.ETHEREUM
};

export const tokenSlice = createSlice({
    name: "tokenState",
    initialState,
    reducers: {
        setTokens: (state: TokenState, action: PayloadAction<IToken[]>) => {
            state.tokens = action.payload
        },
        
        setNetworkChainId: (state, action: PayloadAction<number>) => {
            state.networkChain = action.payload
        }
    }

});

export const { setTokens,setNetworkChainId } = tokenSlice.actions;

export default tokenSlice.reducer;