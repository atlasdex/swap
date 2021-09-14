import styled from "styled-components";
import { Flex } from "components/Box";
import SolanaIcon from "assets/images/Solana-Icon.svg";
import { BinanceIcon, EthereumIcon } from "components/Svg";

const StyledNetworkSection = styled.section`
  padding: 16px;
  margin-top: 50px;
  border-top-right: none;
  .network-row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const NetworkItems = styled.div`
  padding: 10px 0px;
`;

export const NetworkSelection: React.FC = () => {
  return (
    <StyledNetworkSection className="">
      <Flex className={"mx-0 network-row "}>
        <NetworkItems>
          <img className={'solona-icon'} src={SolanaIcon} width={22} height={22} alt="solona" />
        </NetworkItems>
        <NetworkItems>
          <EthereumIcon />
        </NetworkItems>
        <NetworkItems>
          <BinanceIcon />
        </NetworkItems>
      </Flex>
    </StyledNetworkSection>
  );
};
