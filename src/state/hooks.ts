import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'state'
import { setBlock } from './actions'
import { QuoteInitialState, RateInitialState, State, TokenInitialState } from './types'
import { useSelector } from 'react-redux'
import { getWeb3NoAccount } from 'utils/web3'
import { setNetworkModal, setWalletConnectModal } from "./actions"
import { setWalletReducer } from './wallet'
import { setFromAmount, setNetworkChainId, setSelectedFromToken, setSelectedToToken, setToAmount, setTokens } from './token'
import { WalletInitialState } from './types'
import { setRates } from './rates'
import { setQuotes } from './quote'

export const useFetchPublicData = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const web3 = getWeb3NoAccount()
        const interval = setInterval(async () => {
            const blockNumber = await web3.eth.getBlockNumber()
            dispatch(setBlock(blockNumber))
        }, 13000)

        return () => clearInterval(interval)
    }, [dispatch])
} // end of use Fetch Public Data

// Block
export const useBlock = () => {
    return useSelector((state: State) => state.block)
}

//wallet state 
export const useWalletState = () => {
    const dispatch = useAppDispatch();

    const setWalletState = useCallback((wallet: WalletInitialState) => {
        dispatch(setWalletReducer({
            connected: wallet?.connected,
            // wallet: Wallet,
            providerUrl: wallet?.providerUrl,
            endpoint: wallet?.endpoint,
            publicKey: wallet?.publicKey
        }));
        // eslint-disable-next-line
    }, []);


    return { setWalletState }
}

//Model State 
export const useModalState = () => {

    const dispatch = useAppDispatch();
    const setWalletModalState = useCallback(() => {
        dispatch(setWalletConnectModal());
        // eslint-disable-next-line
    }, []);

    const setNetworkModalState = useCallback(() => {
        dispatch(setNetworkModal());
        // eslint-disable-next-line
    }, []);

    return { setWalletModalState, setNetworkModalState }
}

//get intial block
export const useInitialBlock = () => {
    return useSelector((state: State) => state.block.initialBlock)
}

//wallet model
export const useWalletModal = () => {
    const walletOpen = useSelector((state: any) => state.modal.walletModalOpen);
    return walletOpen
}
//networl
export const useNetworkModal = () => {
    const walletOpen = useSelector((state: any) => state.modal.networkModalOpen);
    return walletOpen
}
//get Wallet state 
export const useGetWalletState = () => {
    const wallet = useSelector((state: WalletInitialState) => state);
    return wallet
}

//get Token state 
export const useGetTokenState = () => {
    const { tokens } = useSelector((state: any) => state.tokenReducer);
    return tokens
}
export const useSetTokenState = () => {
    const dispatch = useAppDispatch();

    const setTokenState = useCallback((token: TokenInitialState) => {

        dispatch(setTokens(token.tokens));
        // eslint-disable-next-line
    }, []);

    return { setTokenState }
}
export const useGetSelectedFromTokenState = () => {
    const { selectedFromToken } = useSelector((state: any) => state.tokenReducer);
    return selectedFromToken
}
export const useSetSelectedFromTokenState = () => {
    const dispatch = useAppDispatch();

    const setSelectedFromTokenState = useCallback((token: TokenInitialState) => {

        dispatch(setSelectedFromToken(token.selectedFromToken));
        // eslint-disable-next-line
    }, []);

    return { setSelectedFromTokenState }
}
export const useGetSelectedToTokenState = () => {
    const { selectedToToken } = useSelector((state: any) => state.tokenReducer);
    return selectedToToken
}
export const useSetSelectedToTokenState = () => {
    const dispatch = useAppDispatch();

    const setSelectedToTokenState = useCallback((token: TokenInitialState) => {

        dispatch(setSelectedToToken(token.selectedToToken));
        // eslint-disable-next-line
    }, []);

    return { setSelectedToTokenState }
}
export const useGetFromAmountState = () => {
    const { fromAmount } = useSelector((state: any) => state.tokenReducer);
    return fromAmount
}
export const useSetFromAmountState = () => {
    const dispatch = useAppDispatch();
    const setFromAmountState = useCallback((token: TokenInitialState) => {

        dispatch(setFromAmount(token.fromAmount));
        // eslint-disable-next-line
    }, []);

    return { setFromAmountState }
}
export const useGetToAmountState = () => {
    const { toAmount } = useSelector((state: any) => state.tokenReducer);
    return toAmount
}
export const useSetToAmountState = () => {
    const dispatch = useAppDispatch();

    const setToAmountState = useCallback((token: TokenInitialState) => {

        dispatch(setToAmount(token.toAmount));
        // eslint-disable-next-line
    }, []);

    return { setToAmountState }
}
export const useGetNetworkChainState = () => {
    const { networkChain } = useSelector((state: any) => state.tokenReducer);
    return networkChain
}
export const useSetNetworkChainState = () => {
    const dispatch = useAppDispatch();

    const setNetworkChainState = useCallback((token: TokenInitialState) => {

        dispatch(setNetworkChainId(token.networkChain));
        // eslint-disable-next-line
    }, []);

    return { setNetworkChainState }
}
//get Rates state 
export const useGetRatesState = () => {
    const { rates } = useSelector((state: RateInitialState) => state);
    return rates
}
export const useSetRatesState = () => {
    const dispatch = useAppDispatch();

    const setRateState = useCallback((rate: RateInitialState) => {

        dispatch(setRates(rate.rates));
        // eslint-disable-next-line
    }, []);

    return { setRateState }
}
//get Rates state 
export const useGetQuoteState = () => {
    const { quotes } = useSelector((state: any) => state.quoteReducer);
    return quotes
}
export const useSetQuoteState = () => {
    const dispatch = useAppDispatch();

    const setQuoteState = useCallback((quote: QuoteInitialState) => {

        dispatch(setQuotes(quote.quotes));
        // eslint-disable-next-line
    }, []);

    return { setQuoteState }
}