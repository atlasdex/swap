
import Wallet from '@project-serum/sol-wallet-adapter';
import { IQuote } from 'interfaces/IQuote';
import { IRate } from 'interfaces/IRate';
import { IToken } from 'interfaces/IToken';

// Block
export interface BlockState {
    currentBlock: number
    initialBlock: number
}

// Global state

export interface State {
    block: BlockState
}


export interface ModalInitialState {
    walletModalOpen: boolean
    networkModalOpen: boolean
}


//wallet initial State 
export interface WalletInitialState {
    connected?: boolean
    wallet?: Wallet | null
    providerUrl?: string
    endpoint?: string
    publicKey?: string

}
export interface TokenInitialState {
    tokens?: IToken[],
    selectedFromToken?: IToken,
    selectedToToken?: IToken,
    fromAmount?:number,
    toAmount?:number,
    networkChain?:number
}
export interface RateInitialState {
    rates: IRate[]
}

export interface QuoteInitialState {
    fromToken?: any;
    protocols?: any;
    toToken?: any;
    quotes: any
}