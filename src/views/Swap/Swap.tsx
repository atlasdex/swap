import React from "react";
import styled from "styled-components";
import Text from "components/Text";
import { Flex } from "components/Box";
import Image from "components/Image";
// import History from './components/History';
import { Routing, Market } from "./components";
import GradientLayout from "components/layout/GradientLayout";
import Button from "components/Button";
import { WalletIcon } from "components/Svg";
import useTheme from "hooks/useTheme";
import { useGetQuoteState, useGetWalletState, useModalState } from "state/hooks";
import useSolBalance from "hooks/useSolBalance";
import { NetworkSelection } from "./components/NetworkSelection";
import { useModal } from "widgets/Modal";
import AccountInfo from "components/Account";
import WalletComponent from "components/Wallet";
import useAuth from "hooks/useAuth";

const Exchange: React.FC = () => {
    let walletState = useGetWalletState();
    const { setNetworkModalState, setWalletModalState } = useModalState();

    const { theme, isDark } = useTheme();
    const { colors, fonts, gradients } = theme;

    const { solBalance } = useSolBalance();
    const [historyTabs, setHistoryTabs] = React.useState<boolean>(false);
    const [marketingTab, setMarketingTab] = React.useState<boolean>(true);

    const { login, SolonaWalletConnect } = useAuth();
    let quotes = useGetQuoteState();
    console.log("quotes123", JSON.stringify(quotes));
    console.log(quotes.protocols);
    


    const [onPresentCallback, onDismiss] = useModal(
        walletState.connected ? (
            <AccountInfo />
        ) : (
            <WalletComponent
                onClick={(url) => {
                    SolonaWalletConnect(url);
                }}
            />
        ),
        true
    );

    const AddressAndBalance = () => {
        return (
            <Flex className={"d-flex align-items-center "}>
                <Text
                    text={solBalance + " SOL"}
                    color={colors.white}
                    size={fonts.fontSize15}
                    classes={"btn-custom-padding width-110"}
                />
                <Button
                    icon={<WalletIcon className="mr-3" />}
                    classes={"btn-custom-padding bg-btn-color"}
                    btnClasses="mb-md-0 mr-0 connected-btn-padding"
                    title={`${walletState.publicKey.slice(0, 10)}...`}
                    size={fonts.fontSize15}
                    weight={400}
                    width={"fit-content"}
                />
            </Flex>
        );
    };
    return (
        <>
            <ControlContainer>
                <Flex className={"market-section mx-0 mb-5"}>
                    <Flex className={"market-tab"}>
                        <Flex
                            className={
                                "wallet-btn-section d-block d-md-flex align-items-center justify-content-end py-md-4"
                            }
                        >
                            {/* <Button
            icon={<Image src={SolanaIcon} width="34.78px" classes="mr-3" />}
            classes={"btn-custom-padding"}
            btnClasses="mb-3 mb-md-0"
            title={"Solana"}
            size={fonts.fontSize15}
            weight={400}
            width={"158.77px"}
            innerWidth="154px"
            onClick={() => setNetworkModalState()}
          /> */}
                            {walletState.connected ? (
                                <Button
                                    classes={""}
                                    btnClasses="mb-1 mb-md-0"
                                    title={<AddressAndBalance />}
                                    size={fonts.fontSize15}
                                    weight={400}
                                    width={"fit-content"}
                                    onClick={() => {
                                        setWalletModalState();
                                    }}
                                />
                            ) : (
                                <Button
                                    icon={<WalletIcon className="mr-3" />}
                                    classes={"btn-custom-padding"}
                                    btnClasses="mb-3 mb-md-0"
                                    title={"Connect Wallet"}
                                    size={fonts.fontSize15}
                                    weight={400}
                                    width={"fit-content"}
                                    onClick={() => {
                                        onPresentCallback();
                                    }}
                                />
                            )}
                        </Flex>
                        <Flex className={"d-flex"}>
                            <GradientLayout
                                padding={""}
                                borderRadius={""}
                                backgroundGradient={gradients.blue}
                                broderGradient={gradients.multiColor}
                            >
                                <NetworkSelection />
                            </GradientLayout>
                            <GradientLayout
                                padding={""}
                                borderRadius={""}
                                backgroundGradient={gradients.blue}
                                broderGradient={gradients.multiColor}
                            >
                                <Flex className={"historyTabContent"}>
                                    <Flex className={""}>
                                        {marketingTab ? <Market /> : <Market />}
                                    </Flex>
                                </Flex>
                            </GradientLayout>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="Routing-row mb-5">
                    <GradientLayout
                        padding={''}
                        borderRadius={""}
                        backgroundGradient={gradients.blue}
                        broderGradient={gradients.multiColor}
                    >

                        {quotes != null &&
                            <Routing /> 
                        }

                    </GradientLayout>
                </Flex>
            </ControlContainer>
        </>
    );
};

export default Exchange;
const ControlContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  .padding {
    padding: 1.3rem 1.9rem 3px 1.9rem;
  }
  .wallet-btn-section {
    .btn-custom-padding {
      padding: 12px 25px 12px 10px;
    }
  }
  .historyBorderGradient {
    padding: 1px;
    background: ${(props) =>
        props.theme.isDark
            ? props.theme.gradients.multiColor
            : props.theme.gradients.buttonBorderDark};
    border-radius: 10.7692px !important;
    border: none !important;
    height: 100%;
    .table-parent-div {
      background: ${(props) =>
        props.theme.isDark
            ? props.theme.gradients.blue
            : props.theme.gradients.whiteGrayGradient};
      border-radius: 10.2px;
      height: 100%;

      .tab-div {
        border-bottom: 1.07px solid;
        border-image-source: linear-gradient(0deg, #c4c4c4, #c4c4c4);
        a {
          margin-right: 5% !important;
          padding-left: 4% !important;
          padding-right: 4% !important;
          color: rgba(170, 170, 170, 1);
          &.active {
            color: ${(props) =>
        props.theme.isDark
            ? props.theme.colors.white
            : props.theme.colors.primary};
          }
        }
      }
    }
  }
  .market-section {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    .market-tab {
      width: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .tab-div {
      a {
        color: #515e91;
        &.active {
          color: ${(props) =>
        props.theme.isDark
            ? props.theme.colors.white
            : props.theme.colors.primary};
        }
      }
    }
    .btns-div {
      button {
        margin-left: 18px;
      }
      .btn-custom-padding {
        padding: 8px 10px;
      }
    }
  }
  .bg-btn-color {
    background: ${(props) =>
        props.theme.isDark
            ? props.theme.colors.plumb
            : props.theme.colors.lightFailure};
  }
  .connected-btn-padding {
    padding: 0px 0px 0px 2px !important;
  }
  .width-110 {
    min-width: 110px;
    width: fit-content;
  }
  .width25-height25 {
    width: 25px;
    height: 25px;
  }
  ${(props) => props.theme.mediaQueries.maxWidthMD} {
    .padding {
      padding: 10px 1rem 3px 1rem !important;
    }
  }
  ${(props) => props.theme.mediaQueries.maxWidthSM} {
    .historyBorderGradient {
      .padding {
        padding: 10px 1rem 3px 1rem !important;
      }
    }
  }
`;
