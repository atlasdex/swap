import { useCallback, useEffect } from 'react'
import { useAppDispatch } from 'state'
import { setBlock } from './actions'
import { QuoteState, RateState, State, TokenState } from './types'
import { useSelector } from 'react-redux'
import { getWeb3NoAccount } from 'utils/web3'
import { setNetworkModal, setWalletConnectModal } from "./actions"
import { setNetworkChainId, setWalletReducer } from './wallet'
import { setTokens } from './token'
import { WalletInitialState } from './types'
import { setRates } from './rates'
import { setQuotes, setSlippagetolerance } from './quote'

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
    const setChainId = useCallback((wallet: WalletInitialState) => {
        dispatch(setNetworkChainId(wallet.chainId));
        // eslint-disable-next-line
    }, []);
    return { setWalletState, setChainId }
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
    const wallet = useSelector((state: WalletInitialState) => state.wallet);
    return wallet
}
export const useChainId = () => {
    const { chainId } = useSelector((state: WalletInitialState) => state.wallet);
    return chainId
}
//get Token state 
export const useGetTokenState = () => {
    const { tokens } = useSelector((state: any) => state.tokenReducer);
    return tokens
}
export const useSetTokenState = () => {
    const dispatch = useAppDispatch();

    const setTokenState = useCallback((token: TokenState) => {

        dispatch(setTokens(token.tokens));
        // eslint-disable-next-line
    }, []);

    return { setTokenState }
}
 
//get Rates state 
export const useGetRatesState = () => {
    const { rates } = useSelector((state: RateState) => state);
    return rates
}
export const useSetRatesState = () => {
    const dispatch = useAppDispatch();

    const setRateState = useCallback((rate: RateState) => {

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

    const setQuoteState = useCallback((quote: QuoteState) => {

        dispatch(setQuotes(quote.quotes));
        // eslint-disable-next-line
    }, []);

    return { setQuoteState }
}
//Slippage Tolerance

export const useGetSlippageTolerancestate = () => {
    const { slippageTolerance } = useSelector((state: any) => state.quoteReducer);
    return slippageTolerance
}
export const useSetSlippageTolerancestate = () => {
    const dispatch = useAppDispatch();

    const setSlippageToleranceState = useCallback((quote: QuoteState) => {

        dispatch(setSlippagetolerance(quote.slippageTolerance));
        // eslint-disable-next-line
    }, []);

    return { setSlippageToleranceState }
}