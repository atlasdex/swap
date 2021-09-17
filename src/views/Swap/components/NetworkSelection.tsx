import styled from "styled-components";
import { Flex } from "components/Box";
// import SolanaIcon from "assets/images/Solana-Icon.svg";
import { BinanceIcon, EthereumIcon, GreenTick, SolonaIcon } from "components/Svg";
import Networks from "config/constants/network";
import Image from "components/Image";
import { useState } from "react";

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

const NetworkItems = styled.div`
  padding: 10px 0px;
`;

export const NetworkSelection: React.FC = () => {
   const [ selectedNetwork , setSelectedNetwork ] = useState(Networks[0]);
   console.log(selectedNetwork);

  return (
    <StyledNetworkSection className="">
      <Flex className={"mx-0 network-row "}>
        {Networks.map((network, index) => (
          <Flex
            className={`text-center position-relative py-2`}
            key={index}
            onClick={()=>{
              setSelectedNetwork(network)

            }}
          >
            <Image
              src={network.icon}
              width="30px"
              height="30px"
            />
            {network.name === selectedNetwork.name && <GreenTick className={"tick-icon"}/>}
          </Flex>
        ))}
      </Flex>
    </StyledNetworkSection>
  );
};
