
import Wallet from '@project-serum/sol-wallet-adapter';

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
  networkModalOpen : boolean
}


//wallet initial State 
export interface WalletInitialState {
  connected?: boolean
  wallet ?: Wallet | null
  providerUrl?:string
  endpoint?: string
  publicKey ?: string

}