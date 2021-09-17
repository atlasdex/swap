import { getQuote } from "gateways/TokenApis";
import { IToken } from "interfaces/IToken";
import { useEffect } from "react";
import { useGetFromAmountState, useGetSelectedFromTokenState, useGetSelectedToTokenState, useGetToAmountState, useSetQuoteState, useSetToAmountState } from "state/hooks";

const useQuotes = () => {
    let fromAmount = useGetFromAmountState();
    let toAmount = useGetToAmountState(); 
    let selectedFromToken: IToken = useGetSelectedFromTokenState();
    let selectedToToken: IToken = useGetSelectedToTokenState();
    const { setToAmountState } = useSetToAmountState();

    const { setQuoteState } = useSetQuoteState();

    useEffect(() => {
        const getQuotes = async () => { 
            console.log("Amount==",fromAmount);
            console.log("toAmount==",toAmount);
            let amount = 10**selectedFromToken.decimals * fromAmount; 
            const result = await getQuote(selectedFromToken.address, selectedToToken.address, amount);
            
            let toamount=result?.toTokenAmount/10**selectedToToken.decimals;
            setToAmountState({toAmount:+toamount.toFixed(5)})
            console.log("quotes=>", result);
            setQuoteState({ quotes: result });
        }

        getQuotes()

    }, [fromAmount, selectedFromToken, selectedToToken]);
};

export default useQuotes;