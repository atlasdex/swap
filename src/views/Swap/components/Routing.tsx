import { Flex } from "components/Box";
import styled from "styled-components";
import Text from "components/Text";
import Image from "components/Image";

import Rlogo from "assets/images/R-Icon.svg";
import Solanalogo from "assets/images/Solana-Icon.svg";
import { ArrowRightIcon ,LightRightArrow , VerticalLine }  from "components/Svg";

import useTheme from "hooks/useTheme";

const StyledRouting = styled.div`
  .left-image {
    width: 10%;
  }
  .middle-content-section {
    width: 80%;
    overflow: auto;
    .display-setting {
      display: inline-flex;
    }
  }
  .right-image {
    width: 10%;
  }
  .right-arrow {
    margin: 0 48px;
  }
  .main-routing-coin-div {
    background: ${(props) =>
      props.theme.isDark
        ? props.theme.colors.seeGreen
        : props.theme.gradients.buttonBorderLight};
    border-radius: 13.2692px;
    width: 50vw;
    padding: 2px;
    .inner-routing-coin-div {
      background: ${(props) =>
        props.theme.isDark ? "#261A83" : props.theme.gradients.buttonLight};
      padding: 20px 26px;
      border-radius: 11.2692px;
    }
    .header {
      margin-bottom: 15px;
    }
    .percentage-div {
      background: ${(props) =>
        props.theme.isDark
          ? props.theme.colors.seeGreen
          : props.theme.colors.lightFailure};
      border-radius: 10.7843px;
      div {
        padding: 7px 27px;
      }
    }
  }

  ${(props) => props.theme.mediaQueries.maxWidthXS} {
    .middle-content-section {
      width: 300px;
      overflow: auto;
    }
  }
  @media screen and (max-width: 1600px) and (min-width: 1400px) {
    .main-routing-coin-div {
      width: 300px;
    }
  }
  @media screen and (max-width: 1400px) and (min-width: 1250px) {
    .main-routing-coin-div {
      width: 250px;
      .inner-routing-coin-div {
        padding: 10px 16px;
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
      width: 200px;
      .inner-routing-coin-div {
        padding: 5px 8px;
      }
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

export const Routing: React.FC = () => {
  const { theme, isDark } = useTheme();
  const { colors, fonts } = theme;
  return (
    <StyledRouting className="row m-0">
      <Flex className={"col-12"}>
        <Flex>
          <Text
            text="Routing"
            color={colors.white}
            size={fonts.fontSize24}
            weight={500}
          ></Text>
        </Flex>

        <Flex className={"d-flex"}>
          <Flex className="left-image d-flex align-items-center">
            <Image src={Rlogo} width="fit" />
            <Image src={VerticalLine} width="fit" classes={"ml-4"} />
          </Flex>

          <Flex className="middle-content-section ">
            <Flex className={"display-setting"}>
              <Image
                src={isDark ? ArrowRightIcon : LightRightArrow}
                classes={"right-arrow"}
                width="15px"
              ></Image>

              <Flex className={`main-routing-coin-div`}>
                <Flex className={`inner-routing-coin-div`}>
                  <Flex className="d-flex align-items-center header">
                    <Image src={Solanalogo} width="46px" />
                    <Text
                      text={"SOL"}
                      size={fonts.fontSize26}
                      color={colors.white}
                      classes="pl-4"
                    />
                  </Flex>
                  <Flex className="percentage-div w-50">
                    <Text
                      text="SOLANA 100%"
                      color={colors.white}
                      size={fonts.fontSize21}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
              {isDark? <ArrowRightIcon className="right-arrow"/> : <LightRightArrow className="right-arrow"/>}
 
              {/* <Div classes={`main-routing-coin-div`}>
                <Div classes={`inner-routing-coin-div`}>
                  <Div classes="d-flex align-items-center header">
                    <Image src={Solanalogo} width="46px" />
                    <Text
                      text={"SOL"}
                      size={fonts.fontSize26}
                      color={colors.white}
                      classes="pl-4"
                    />
                  </Div>
                  <Div classes="percentage-div">
                    <Text
                      text="SOLANA 100%"
                      color={colors.white}
                      size={fonts.fontSize21}
                    ></Text>
                  </Div>
                </Div>
              </Div>
              <Image
                src={isDark ? RightArrow : LightRightArrow}
                classes={"right-arrow"}
                width="15px"
              ></Image> */}
            </Flex>
          </Flex>

          <Flex className="right-image d-flex align-items-center justify-content-end">
            <VerticalLine className={'mr-4'}/>
            <Image src={Solanalogo} width="fit" />
          </Flex>
        </Flex>
      </Flex>
    </StyledRouting>
  );
};
