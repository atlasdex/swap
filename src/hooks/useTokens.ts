import { getTokens } from "gateways/TokenApis";
import { IToken } from "interfaces/IToken";
import { useEffect, useState } from "react";
import { useGetNetworkChainState, useSetSelectedFromTokenState, useSetSelectedToTokenState, useSetTokenState } from "state/hooks";
import useQuotes from "./useQuotes";

const useTokens = async () => {
    const { setTokenState } = useSetTokenState();
    const { setSelectedFromTokenState } = useSetSelectedFromTokenState();
    const { setSelectedToTokenState } = useSetSelectedToTokenState();
     let chainId = useGetNetworkChainState();
     console.log("chainId=",chainId);
     
    useQuotes()
    useEffect(() => {
        const GetToken = async () => {
            const result = await getTokens(chainId); 
            const tokenList: IToken[] = Object.values(result.data); 
            setTokenState({ tokens: tokenList })
            setSelectedFromTokenState({ selectedFromToken: tokenList[0] }) 
            setSelectedToTokenState({ selectedToToken: tokenList[1] }) 
        }
        GetToken()
    }, [chainId])

    return;

};
export default useTokens;