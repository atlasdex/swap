import BigNumber from "bignumber.js";
import { getQuote } from "gateways/TokenApis";
import { IToken } from "interfaces/IToken";
import { useEffect } from "react";
import { 
    
    useSetQuoteState,
     
} from "state/hooks";
const useQuotes = () => {
    let fromAmount =  0;
    // let selectedFromToken: IToken = useGetSelectedFromTokenState();
    // let selectedToToken: IToken = useGetSelectedToTokenState();
    // const { setToAmountState } = useSetToAmountState();
    // let chainId = useGetNetworkChainState();
    // console.log(chainId);

    const { setQuoteState } = useSetQuoteState();

    function toPlainString(num) {
        return ("" + +num).replace(
            /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
            function (a, b, c, d, e) {
                return e < 0
                    ? b + "0." + Array(1 - e - c.length).join("0") + c + d
                    : b + c + d + Array(e - d.length + 1).join("0");
            }
        );
    }

    // useEffect(() => {
    //     const getQuotes = async () => {
    //         try {
    //             const amount = toPlainString(
    //                 fromAmount * 10 ** selectedFromToken.decimals
    //             );
    //             const result = await getQuote(
    //                 selectedFromToken.address,
    //                 selectedToToken.address,
    //                 amount,
    //                 chainId
    //             );
    //             console.log("result", result);
    //             let toamount = result?.toTokenAmount / 10 ** selectedToToken.decimals;
    //             console.log("toamount", toamount);

    //             toamount = isNaN(toamount) ? 0 : toamount

    //             setToAmountState({ toAmount: +toamount.toFixed(5) });
    //             // console.log("quotes=>", result);
    //             setQuoteState({ quotes: result });
    //         } catch (error) {
    //             console.log(error);

    //         }

    //     };
    //     if (fromAmount > 0) {
    //         getQuotes();
    //     }

    // }, [fromAmount, selectedFromToken, selectedToToken, chainId]);
};

export default useQuotes;
