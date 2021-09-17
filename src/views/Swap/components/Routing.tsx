import { Flex } from "components/Box";
import styled from "styled-components";
import Text from "components/Text";
import Image from "components/Image";

import Rlogo from "assets/images/R-Icon.svg";
import Solanalogo from "assets/images/Solana-Icon.svg";
import { ArrowRightIcon, LightRightArrow, VerticalLine } from "components/Svg";
import { MdKeyboardArrowRight } from "react-icons/md";

import useTheme from "hooks/useTheme";
import { useState } from "react";
import StaticQuote from "config/constants/staticQuote";
import { IoMdPie } from "react-icons/io";

export const Routing: React.FC = () => {
  const { theme, isDark } = useTheme();
  const [quoteRoute, setQuoteRoute] = useState(StaticQuote);
  console.log("Static quoteRoute", quoteRoute);

  const { colors, fonts } = theme;
  return (
    <StyledRouting className="row m-0 ">
      <Flex className={"col-12 py-5"}>
        <Flex className={"d-flex"}>
          <Flex className="right-image d-flex align-items-center justify-content-end">
            <Image src={quoteRoute.fromToken.logoURI} width="44" />
            {/* <VerticalLine className={"ml-4"} /> */}
          </Flex>
          <Flex className="middle-content-section border-xy">
            {quoteRoute.protocols.map((item, index) => {
              return (
                <Flex key={index} className={"display-setting"}>
                  <Flex className="right-arrow d-flex">
                    {/* <Text
                        text={"100%"}
                        size={fonts.fontSize11}
                        color={colors.white}
                        classes={"percentage-text"}
                      /> */}
                    <MdKeyboardArrowRight className="icon-svg" />
                  </Flex>
                  <Flex className={`main-routing-coin-div`}>
                    {item.map((elment, index) => {
                      return (
                        <Flex className={`inner-routing-coin-div`}>
                          <Flex className="d-flex align-items-center header">
                            <Image
                              src={`https://tokens.1inch.io/${elment[0].toTokenAddress}.png`}
                              width="32px"
                            />
                            <Text
                              text={"SOL"}
                              size={fonts.fontSize16}
                              color={colors.white}
                              classes="pl-3"
                            />
                          </Flex>
                          {elment.map((exchangesNode, index) => {
                            return (
                              <Flex key={index} className="percentage-div mb-1">
                                <Text
                                  text={`${exchangesNode.name} ${exchangesNode.part}%`}
                                  color={colors.white}
                                  size={fonts.fontSize11}
                                ></Text>
                              </Flex>
                            );
                          })}
                        </Flex>
                      );
                    })}
                  </Flex>
                  <Flex className="right-arrow d-flex">

                    <MdKeyboardArrowRight className="icon-svg" />
                  </Flex>
                </Flex>
              );
            })}
          </Flex>

          <Flex className="right-image d-flex align-items-center">
            {/* <VerticalLine className={"mr-4"} /> */}
            <Image src={quoteRoute.toToken.logoURI} width="44" />
          </Flex>
        </Flex>
      </Flex>
    </StyledRouting>
  );
};

const StyledRouting = styled.div`
  .left-image {
    width: 10%;
  }
  .middle-content-section {
    display: flex;
    flex-direction: column;
    // overflow: auto;
    width: -webkit-fill-available;
    .display-setting {
      margin: 10px 0px;
      display: inline-flex;
    }
  }
  .right-image {
    width: 10%;
  }
  .right-arrow {
    margin: 0 30px;
    .icon-svg {
      font-size: 21px;
      margin-top: auto;
      margin-bottom: auto;
      color: white;
      margin-left: 6px;
    }
    .percentage-text {
      display: flex;
      align-items: center;
    }
  }

  .border-xy {
    border-left: 1px solid;
    border-right: 1px solid;
    margin: 0px 30px;
  }
  .main-routing-coin-div {
    display: flex;
    flex-direction: row;

    background: ${(props) =>
      props.theme.isDark
        ? "transparent"
        : props.theme.gradients.buttonBorderLight};
    border-radius: 13.2692px;
    width: -webkit-fill-available;
    padding: 2px;
    .inner-routing-coin-div {
      height: fit-content;
      background: ${(props) =>
        props.theme.isDark ? "#261A83" : props.theme.gradients.buttonLight};
      padding: 20px 26px;
      border-radius: 11.2692px;
      width: inherit;
      margin: 0px 12px;
    }
    .header {
      margin-bottom: 15px;
    }
    .percentage-div {
      width: 150px;
      background: ${(props) =>
        props.theme.isDark
          ? props.theme.colors.seeGreen
          : props.theme.colors.lightFailure};
      border-radius: 10.7843px;
      div {
        padding: 4px 10px;
      }
    }
  }

  ${(props) => props.theme.mediaQueries.maxWidthXS} {
    .middle-content-section {
      overflow: auto;
    }
  }

  @media screen and (max-width: 1400px) and (min-width: 1250px) {
    .main-routing-coin-div {
      .inner-routing-coin-div {
        padding: 3% 5%;
      }
      img {
        width: 35px;
      }
      div {
        font-size: 15px;
      }
    }
  }
  @media screen and (max-width: 1250px) {
    .main-routing-coin-div {
      img {
        width: 35px;
      }
      div {
        font-size: 13px;
      }
    }
    .right-arrow {
      margin: 0 18px;
    }
  }
  ${(props) => props.theme.mediaQueries.maxWidthLG} {
    .right-arrow {
      margin: 0 18px;
      width: 10px;
    }
  }
`;
