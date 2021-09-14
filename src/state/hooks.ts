import { useCallback,  useEffect } from 'react'
import { useAppDispatch } from 'state'
import { setBlock } from './actions'
import { State } from './types'
import { useSelector } from 'react-redux'
import { getWeb3NoAccount } from 'utils/web3'
import { setNetworkModal, setWalletConnectModal } from "./actions"
import { setWalletReducer } from './wallet'
import { WalletInitialState } from './types'

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

  const setWalletState =  useCallback((wallet : WalletInitialState)=>{
    dispatch(setWalletReducer({
      connected: wallet?.connected,
      // wallet: Wallet,
      providerUrl: wallet?.providerUrl,
      endpoint: wallet?.endpoint,
      publicKey: wallet?.publicKey
    }));
    // eslint-disable-next-line
  },[]);


  return { setWalletState }
}

//Model State 
export const useModalState = () => {

  const dispatch = useAppDispatch();
  const setWalletModalState =  useCallback(()=>{
    dispatch(setWalletConnectModal());
    // eslint-disable-next-line
  },[]);

  const setNetworkModalState =  useCallback(()=>{
    dispatch(setNetworkModal());
    // eslint-disable-next-line
  },[]);
  
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
