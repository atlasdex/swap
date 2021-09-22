import styled from "styled-components";
import { Flex } from "components/Box";
// import SolanaIcon from "assets/images/Solana-Icon.svg";
import {
  BinanceIcon,
  EthereumIcon,
  GreenTick,
  SolonaIcon,
} from "components/Svg";
import Networks from "config/constants/network";
import Image from "components/Image";
import { useEffect, useState } from "react";
import { useGetWalletState, useSetNetworkChainState } from "state/hooks";
import { setupNetwork } from "utils/wallet";
import { useWeb3React } from "@web3-react/core";
import { NetworksType } from "config/constants/types";

const StyledNetworkSection = styled.section`
  padding: 16px;
  margin-top: 50px;
  border-top-right: none;
  .tick-icon {
    position: absolute;
    left: 20px;
    bottom: 4px;
  }
`;

export const NetworkSelection: React.FC = () => {
  //fetch current Wallet state
  let walletState = useGetWalletState();

  const [selectedNetwork, setSelectedNetwork] = useState<NetworksType>();
  //object destructuring of useWeb3React web3 for context fetching and cahinID
  const context = useWeb3React();
  const { chainId } = context;
  //getting setnetworkChain method to set chain id in redux
  const { setNetworkChainState } = useSetNetworkChainState();

  //Set Chain id state and call setup or switch network function
  useEffect(() => {
    function setChainId() {
      setNetworkChainState({ networkChain: selectedNetwork?.chainId });
      walletState.connected && setupNetwork(selectedNetwork?.chainId);
    }
    setChainId();
  }, [selectedNetwork]);

  //listening network switching from Metamask
  useEffect(() => {
    Networks.map((item, index) => {
      if (+item.chainId === chainId) {
        setSelectedNetwork(item); // selected network detail hook
      }else{
        setSelectedNetwork(Networks[0]); // selected network detail hook
        setNetworkChainState({ networkChain: Networks[0]?.chainId });
      }
    });
  }, [chainId]);

  return (
    <StyledNetworkSection className="">
      <Flex className={"mx-0 network-row "}>
        {Networks &&
          Networks.map((network, index) => (
            <Flex
              className={`text-center position-relative py-2`}
              key={index}
              onClick={() => {
                setSelectedNetwork(network);
              }}
            >
              <Image src={network.icon} width="30px" height="30px" />
              {network.name === selectedNetwork?.name && (
                <GreenTick className={"tick-icon"} width={14} />
              )}
            </Flex>
          ))}
      </Flex>
    </StyledNetworkSection>
  );
};
