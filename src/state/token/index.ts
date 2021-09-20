import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NetworkChainId } from "config/constants/types";
import { IToken } from "interfaces/IToken";
import { useSetTokenState } from "state/hooks";
import { TokenInitialState } from "state/types";
const initialState: TokenInitialState = {
    tokens: [],
    selectedFromToken: {
        symbol: "",
        name: "",
        decimals: 0,
        address: "",
        logoURI: ""
    },
    selectedToToken: {
        symbol: "",
        name: "",
        decimals: 0,
        address: "",
        logoURI: ""
    },
    fromAmount: 0,
    toAmount: 0, 
    networkChain:NetworkChainId.ETHEREUM
};

export const tokenSlice = createSlice({
    name: "tokenState",
    initialState,
    reducers: {
        setTokens: (state: TokenInitialState, action: PayloadAction<IToken[]>) => {
            state.tokens = action.payload
        },
        setSelectedFromToken: (state, action: PayloadAction<IToken>) => { 
            state.selectedFromToken = action.payload 
        },
        setSelectedToToken: (state, action: PayloadAction<IToken>) => { 
            state.selectedToToken = action.payload 
        },
        setFromAmount: (state, action: PayloadAction<number>) => {
          //  console.log("in Reducer=",action.payload); 
            state.fromAmount = action.payload
        },
        setToAmount: (state, action: PayloadAction<number>) => {
            state.toAmount = action.payload
        },
        setNetworkChainId: (state, action: PayloadAction<number>) => {
            state.networkChain = action.payload
        }
    }

});

export const { setTokens, setSelectedFromToken, setSelectedToToken, setFromAmount, setToAmount,setNetworkChainId } = tokenSlice.actions;

export default tokenSlice.reducer;