import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getBep20Contract,
  getCGChefContract

} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */


export const useCGChef = () => {
  const web3 = useWeb3()
  return useMemo(() => getCGChefContract(web3), [web3])
}

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}