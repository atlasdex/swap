import { getTokens } from "gateways/TokenApis";
import { IToken } from "interfaces/IToken";
import { useEffect, useState } from "react";
import {useChainId, useSetTokenState } from "state/hooks";
import useQuotes from "./useQuotes";

const useTokens = async () => {
    const { setTokenState } = useSetTokenState();
    // const { setSelectedFromTokenState } = useSetSelectedFromTokenState();
    // const { setSelectedToTokenState } = useSetSelectedToTokenState();
    let chainId = useChainId();

    useQuotes()
    useEffect(() => {
        const GetToken = async () => {
            try {
                const result = await getTokens(chainId); 
                const tokenList: IToken[] = Object.values(result.data);
                setTokenState({ tokens: tokenList })
                //setSelectedFromTokenState({ selectedFromToken: tokenList[0] })
               // setSelectedToTokenState({ selectedToToken: tokenList[1] })
            } catch (error) {
                console.log(error);

            }

        }

        GetToken()
    }, [chainId])

    return;

};
export default useTokens;