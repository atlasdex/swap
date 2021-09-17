import { getQuote } from "gateways/TokenApis";
import { IToken } from "interfaces/IToken";
import { useEffect } from "react";
import { useGetFromAmountState, useGetSelectedFromTokenState, useGetSelectedToTokenState, useGetToAmountState, useSetQuoteState } from "state/hooks";

const useQuotes = () => {
    let fromAmount = useGetFromAmountState();
    let toAmount = useGetToAmountState();

   
    let selectedFromToken: IToken = useGetSelectedFromTokenState();
    let selectedToToken: IToken = useGetSelectedToTokenState();
    const { setQuoteState } = useSetQuoteState();

    useEffect(() => {
        const getQuotes = async () => { 
            console.log("Amount==",fromAmount);
            console.log("toAmount==",toAmount);
            let amount = 10**selectedFromToken.decimals * fromAmount; 
            const result = await getQuote(selectedFromToken.address, selectedToToken.address, amount);

            console.log("quotes=>", result);
            setQuoteState({ quotes: result });
        }

        getQuotes()

    }, [fromAmount, selectedFromToken, selectedToToken]);
};

export default useQuotes;