import { getTokens } from "gateways/WalletApis";
import { useEffect } from "react";

const useTokens = () => {

    useEffect(() => {
        const tokens = getTokens();

    }, [])

};
export default useTokens;