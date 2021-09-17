import BigNumber from "bignumber.js";
import { getQuote } from "gateways/TokenApis";
import { IToken } from "interfaces/IToken";
import { useEffect } from "react";
import {
  useGetFromAmountState,
  useGetSelectedFromTokenState,
  useGetSelectedToTokenState,
  useGetToAmountState,
  useSetQuoteState,
  useSetToAmountState,
} from "state/hooks";
const useQuotes = () => {
  let fromAmount = useGetFromAmountState();
  let toAmount = useGetToAmountState();
  let selectedFromToken: IToken = useGetSelectedFromTokenState();
  let selectedToToken: IToken = useGetSelectedToTokenState();
  const { setToAmountState } = useSetToAmountState();

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

  useEffect(() => {
    const getQuotes = async () => {
      const amount = toPlainString(
        fromAmount * 10 ** selectedFromToken.decimals
      );
      const result = await getQuote(
        selectedFromToken.address,
        selectedToToken.address,
        amount
      );

      let toamount = result?.toTokenAmount / 10 ** selectedToToken.decimals;
      setToAmountState({ toAmount: +toamount.toFixed(5) });
      console.log("quotes=>", result);
      setQuoteState({ quotes: result });
    };

    getQuotes();
  }, [fromAmount, selectedFromToken, selectedToToken]);
};

export default useQuotes;
