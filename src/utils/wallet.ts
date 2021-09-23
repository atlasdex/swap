// Set of helper functions to facilitate wallet setup

import { nodes } from "./getRpcUrl";
import Networks from "config/constants/network";

/**
 * Prompt the user to add BSC nad etherum as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (chainID) => {
  
  const provider = (window as WindowChain).ethereum;
  const networkDetail = await fetchNetworkDetail(chainID); // network detail from dataUrl.ts file
  if (networkDetail !== undefined) {
    if (provider) {
      const chainId = parseInt(chainID as string, 10);
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
        return false;

      } catch (switchError : any) {
        if (switchError?.code === 4902) {
          try {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: `0x${chainId.toString(16)}`,
                  chainName: networkDetail.chainName,
                  nativeCurrency: networkDetail.nativeCurrency,
                  rpcUrls: networkDetail.rpcUrls,
                  blockExplorerUrls: networkDetail.blockExplorerUrls,
                },
              ],
            });
            return true;
          } catch (error) {
            console.error(error);
            return false;
          }
        }
        // handle other "switch" errors
      }
    } else {
      console.error(
        "Can't setup the BSC network on metamask because window.ethereum is undefined"
      );
      return false;
    }
  } else {
    console.log("Network undefined");
  }
};

export const fetchNetworkDetail = (chainID) => {
  let selectedNetwork;
  Networks.map((item, index) => {
    if (item.chainId === chainID) {
      selectedNetwork = item;
    }
  });
  return selectedNetwork;
};

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenImage: string
) => {
  const tokenAdded = await (window as Window).ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  });

  return tokenAdded;
};
