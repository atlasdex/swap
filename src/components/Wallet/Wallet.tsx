import { Flex } from "components/Box";
import styled from "styled-components";
import Button from "components/Button";
import Text from "components/Text";
import Link from "components/Link";
import { useState } from "react";
import Image from "components/Image";
import Networks from "config/constants/network";
import WalletList from "config/constants/walletProviders";
import useTheme from "hooks/useTheme";
interface WalletConnectProps {
  onClick?: (provider: string) => void;
}
const StyledWallet = styled.div`
  .width-47 {
    width: 47px;
  }
  .padding-for-row {
    width: 125px;
  }
  .term-and-condition-row {
    a {
      color: #627eea;
      font-size: ${(props) => props.theme.fonts.fontSize18}px;
      font-weight: 400;
      padding: 0 6px;
      margin: 0;
    }
    .cursor-class {
      cursor: pointer;
    }
  }
  .disabled-with-opacity {
    opacity: 0.3;
    pointer-events: none !important;
  }
  ${(props) => props.theme.mediaQueries.maxWidthLG} {
    padding: 2% 3%;
    .term-and-condition-row {
      .text-div {
        display: inline-block !important;
        div {
          width: fit-content;
          display: inline;
        }
      }
    }
  }
  ${(props) => props.theme.mediaQueries.maxWidthLG} {
    .padding-for-row {
      width: 100px;
    }
  }
`;
const WalletComponent: React.FC<WalletConnectProps> = (props) => {
  const { onClick } = props;
  const { theme } = useTheme();
  const { colors, fonts } = theme;
  const [teamAndCondition, setTermAndCondition] = useState(false);

  return (
    <StyledWallet>
      <Flex className={"mb-4"}>
        <Flex className={"d-flex term-and-condition-row"}>
          <Flex className={"width-47 mr-3"}>
            <Button
              title={"1"}
              width={"47px"}
              height={"47px"}
              innerHeight="43px"
              innerWidth="43px"
              size={fonts.fontSize18}
              weight={400}
              innerRadius="50px"
              outerRadius="50px"
              classes="text-center justify-content-center"
            />
          </Flex>
          <Flex className={"d-flex align-items-center text-div"}>
            <Text
              text={"Accept"}
              color={colors.white}
              size={fonts.fontSize18}
              weight={400}
            />
            <Link text={"Terms of Service"} />
            <Text
              text={"and"}
              color={colors.white}
              size={fonts.fontSize18}
              weight={400}
            />
            <Link text={"Privacy Policy"} />
          </Flex>
        </Flex>

        <Flex className={"d-flex term-and-condition-row"}>
          <Flex className={"width-47 mr-3"}></Flex>
          <Flex className={""}>
            <Flex
              className={"d-flex align-items-center cursor-class"}
              onClick={() => {
                setTermAndCondition(!teamAndCondition);
              }}
            >
              <input
                type="checkbox"
                className={"mr-2 cursor-class"}
                checked={teamAndCondition}
              />
              <Text
                text={"I read and accept"}
                color={colors.white}
                size={fonts.fontSize16}
                classes={"cursor-class"}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex className={"network-main-row mb-4"}>
        <Flex className={"d-flex"}>
          <Flex className={"width-47 mr-3"}>
            <Button
              title={"2"}
              width={"47px"}
              height={"47px"}
              innerHeight="43px"
              innerWidth="43px"
              size={fonts.fontSize18}
              weight={400}
              innerRadius="50px"
              outerRadius="50px"
              classes="text-center justify-content-center"
            />
          </Flex>
          <Flex className={"d-flex align-items-center text-div"}>
            <Text
              text={"Choose Network"}
              color={colors.white}
              size={fonts.fontSize18}
            />
          </Flex>
        </Flex>
        <Flex className={"d-flex"}>
          <Flex className={"width-47 mr-3 "}></Flex>
          <Flex className={"row w-100"}>
            {Networks.map((network, index) => (
              <Flex
                className={`padding-for-row text-center py-2  ${
                  network.disabled && "disabled-with-opacity"
                } ${!teamAndCondition && "disabled-with-opacity"}`}
                key={index}
              >
                <Image src={network.selectIcon} width="44px" height="44px" classes="mb-2" />
                {/* <network.icon /> */}
                <Text
                  text={network.name}
                  color={colors.white}
                  size={fonts.fontSize14}
                ></Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex className={"wallet-main-row mb-4"}>
        <Flex className={"d-flex"}>
          <Flex className={"width-47 mr-3"}>
            <Button
              title={"3"}
              width={"47px"}
              height={"47px"}
              innerHeight="43px"
              innerWidth="43px"
              size={fonts.fontSize18}
              weight={400}
              innerRadius="50px"
              outerRadius="50px"
              classes="text-center justify-content-center"
            />
          </Flex>
          <Flex className={"d-flex align-items-center text-div"}>
            <Text
              text={"Choose Wallet"}
              color={colors.white}
              size={fonts.fontSize18}
            />
          </Flex>
        </Flex>
        <Flex className={"d-flex"}>
          <Flex className={"width-47 mr-3 "}></Flex>
          <Flex className={"row w-100"}>
            {WalletList.map((network, index) => (
              <Flex
                className={`padding-for-row text-center py-2 ${
                  !teamAndCondition && "disabled-with-opacity"
                }`}
                key={index}
                onClick={() => onClick(network.url)}
              >
                <Image
                  src={network.icon}
                  width="52px"
                  height="52px"
                  classes="mb-2"
                />
                <Text
                  text={network.name}
                  color={colors.white}
                  size={fonts.fontSize14}
                ></Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </StyledWallet>
  );
};

export default WalletComponent;
