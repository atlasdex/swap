import { useEffect } from 'react'
import { useAppDispatch } from 'state'
import { setBlock } from './actions'
import { State } from './types'
import { useSelector } from 'react-redux'
import { getWeb3NoAccount } from 'utils/web3'


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

export const useInitialBlock = () => {
  return useSelector((state: State) => state.block.initialBlock)
}