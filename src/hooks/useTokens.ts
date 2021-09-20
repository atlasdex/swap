import { getTokens } from "gateways/TokenApis";
import { IToken } from "interfaces/IToken";
import { useEffect, useState } from "react";
import { useSetSelectedFromTokenState, useSetSelectedToTokenState, useSetTokenState } from "state/hooks";
import useQuotes from "./useQuotes";

const useTokens = async () => {
    const { setTokenState } = useSetTokenState();
    const { setSelectedFromTokenState } = useSetSelectedFromTokenState();
    const { setSelectedToTokenState } = useSetSelectedToTokenState();
    useQuotes()
    useEffect(() => {
        const GetToken = async () => {
            const result = await getTokens(); 
            const tokenList: IToken[] = Object.values(result.data); 
            setTokenState({ tokens: tokenList })
            setSelectedFromTokenState({ selectedFromToken: tokenList[0] }) 
            setSelectedToTokenState({ selectedToToken: tokenList[1] }) 
        }
        GetToken()
    }, [])

    return;

};
export default useTokens;