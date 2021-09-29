import styled from "styled-components";
import { Flex } from "components/Box";
import Text from "components/Text";
import { AdvancedSetting, ClockAtlas, ColorAdvannceSetting, ColorClock, ColorRefresh, RefreshIcon } from "components/Svg";

import Select from "react-select";
import Image from "components/Image";

import Input from "components/Input";
import Button, { ButtonSeeGreen } from "components/Button";
import useTheme from "hooks/useTheme";
import {
  useChainId,
  useGetTokenState,
  useGetWalletState,
  useSetQuoteState,
  useSetTokenState,
} from "state/hooks";
import { useModalState } from "state/hooks";
import { useState } from "react";
import CustomDropdown from "components/Dropdown";
import { RiSwapFill } from "react-icons/ri";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SolanaIcon from "assets/images/Solana-Icon.svg";
import RayIcon from "assets/images/R-Icon.svg";
import { useEffect } from "react";
import useTokens from "hooks/useTokens";
import useQuotes from "hooks/useQuotes";
import { IToken } from "interfaces/IToken";
import { getQuote, getTokens, tokenSwap } from "gateways/TokenApis";
import { NetworkChainId } from "config/constants/types";
import { WalletInitialState } from "state/types";
import { useModal } from "widgets/Modal";
import WalletComponent from "components/Wallet";
import { useWeb3React } from "@web3-react/core";
import { getTransactionData } from "utils/transactionData";
import useAuth from "hooks/useAuth";
import { toHex, waitForTxReceipt } from "utils/utils";
import { toast } from "react-toastify";
import { ErrorMessage, InfoMessage, successMessage } from "utils/notification";
import Loader from "components/Loader";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BarComponent } from "./bar";

export const Market: React.FC = () => {
  const { theme } = useTheme();
  const { colors, fonts, isDark } = theme;
  const walletState: WalletInitialState = useGetWalletState();
  const { setTokenState } = useSetTokenState();
  const [selectedFromToken, setSelectedFromToken] = useState<IToken>();
  const [selectedToToken, setSelectedToToken] = useState<IToken>();
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);

  const [fromAmountInput, setfromAmountInput] = useState(1);
  const [tokenOptions, setTokenOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [amountloader, setAmountLoader] = useState(false);
  const [isRefresh, setRefresh] = useState(false);
  const [refreshTimer, setRefreshTimer] = useState(100);
 

  const { library } = useWeb3React();
  const { SolonaWalletConnect } = useAuth();

  const chainId = useChainId();
  const { setQuoteState } = useSetQuoteState();
  useEffect(() => {
    const GetToken = async () => {
      try {
        const result = await getTokens(chainId);
        const tokenList: IToken[] = Object.values(result.data);
        setTokenOptions(tokenList);
        setTokenState({ tokens: tokenList });
        if (chainId == NetworkChainId.ETHEREUM) {
          const defaultFrom: IToken = tokenList.find((item: IToken) => {
            return item.symbol == "ETH";
          });
          setSelectedFromToken(defaultFrom);
          setSelectedToToken(
            tokenList.find((item: IToken) => {
              return item.symbol == "DAI";
            })
          );
        } else if (chainId == NetworkChainId.BINANCE) {
          const defaultFrom: IToken = tokenList.find((item: IToken) => {
            return item.symbol == "BNB";
          });
          setSelectedFromToken(defaultFrom);
          setSelectedToToken(
            tokenList.find((item: IToken) => {
              return item.symbol == "1INCH";
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetToken();
  }, [chainId]);

  function toPlainString(num) {
    return ("" + +num).replace(
      /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
      function (a, b, c, d, e) {
        return e < 0
          ? b + "0." + Array(1 - e - c.length).join("0") + c + d
          : b + c + d + Array(e - d.length + 1).join("0");
      }
    );
  }

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setAmountLoader(true);
        const amount = toPlainString(
          fromAmount * 10 ** selectedFromToken.decimals
        );
        const result = await getQuote(
          selectedFromToken.address,
          selectedToToken.address,
          amount,
          chainId
        );
        let toamount = result?.toTokenAmount / 10 ** selectedToToken.decimals;

        toamount = isNaN(toamount) ? 0 : toamount;

        setToAmount(+toamount.toFixed(5));
        setQuoteState({ quotes: result });
        setAmountLoader(false);
      } catch (error) {
        setAmountLoader(false);
        console.log(error);
      }
    };
    if ( selectedFromToken && selectedToToken) {

      getQuotes();

    }
  }, [fromAmount, selectedFromToken, selectedToToken, chainId , isRefresh]);
  const onSwapClick = async () => {
    walletState.connected ? swapCall() : onPresentCallback();
  };

  const [onPresentCallback, onDismiss] = useModal(
    <WalletComponent
      onClick={(url) => {
        SolonaWalletConnect(url);
      }}
      onDismiss={() => {
        onDismiss();
      }}
    />,

    true
  );

  //Code for signing transaction to connected wallet
  const signProvider = async (transaction) => {
    try {
      const transactionSend = await getTransactionData(
        transaction,
        walletState.publicKey,
        library
      );
      transactionSend.value = toHex(transactionSend.value, 16);

      const unConfirmedHash = await library
        .getSigner(walletState.publicKey)
        .sendTransaction(transactionSend);
      console.log("trxHash  => ", unConfirmedHash);
      //check fro txn confirmation
      InfoMessage("Waiting for Transaction Confirmation");

      const confimedTxDetails: any = await waitForTxReceipt(unConfirmedHash);

      //add check on receipt
      if (confimedTxDetails?.status === true) {
        successMessage("Transaction Confirmed");
        //set loading to false
        setLoading(false);
      } else {
        setLoading(false);

        // TODO Trasnaction Failed, Please try again later
        ErrorMessage("Trasnaction Failed, Please try again later");
      }
    } catch (error: any) {
      setLoading(false);

      console.log("error in txn siging ", error);
      if (error.code === 4001) {
        ErrorMessage(error?.message);
      } else if (error.code === "INSUFFICIENT_FUNDS") {
        ErrorMessage("Insufficient Funds");
      }
    }
  };

  async function swapCall() {
    setLoading(true);
    try {
      const amount = toPlainString(
        fromAmount * 10 ** selectedFromToken.decimals
      );
      // console.log();

      const result = await tokenSwap(
        selectedFromToken.address,
        selectedToToken.address,
        amount,
        chainId,
        walletState.publicKey,
        1
      );
      console.log("result", result);
      signProvider(result.data.tx);
    } catch (error: any) {
      if (error.response.data.message.includes("Not enough")) {
        ErrorMessage("Insufficient Balance");
      } else {
        ErrorMessage(error.response.data.message);
      }
      setLoading(false);
    }
  }
  useEffect(() => {
    var seconds = ((2*1000)/100);
    const interval = setTimeout(() => {
      setRefreshTimer(refreshTimer - 1)
      if (refreshTimer <0) {
        setRefresh(!isRefresh);
        setRefreshTimer(100)
      } 
    }, seconds);
    return () => {

      clearTimeout(interval)
    };
  });

  useEffect(() => {
    if (searchQuery !== 0) {
      const delayDebounceFn = setTimeout(() => {
        setFromAmount(searchQuery);
      }, 200);

      return () => clearTimeout(delayDebounceFn);
    }

  }, [searchQuery]);
  const revertTokenSelection = () => {
    let temp = selectedFromToken;
    setSelectedFromToken(selectedToToken);
    setSelectedToToken(temp);
  };
  const optionsss = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const IconOption = (props) => (
    <div>
      <Image src={props?.logoURI} classes="mr-2" width="37" height="37" />
      <Text
        text={props?.symbol}
        // color={color}
        // weight={weight}
        // size={size}
        classes="dropdown-text"
      />
    </div>
  );

  const onRefreshClick = () =>{
    setRefresh(!isRefresh);
    setRefreshTimer(100);
  }


  return (
    <SkeletonTheme color="#261a83" highlightColor="#fff">
      <StyledMarketingSection className="">
        <Flex className="pb-3 d-block d-md-flex justify-content-end">
           <BarComponent onRefreshClick={onRefreshClick} refreshTimer={refreshTimer}/>
        </Flex>
        <Flex className={"mx-0 payment-row mb-4"}>
          <Flex className={"pay-div-parent"}>
            <Flex
              className={
                isDark ? `pay-card borderClass` : `pay-card backgroundClass`
              }
            >
              <Flex className="d-flex justify-content-between inner-pay-card">
                <Flex className={" pay-card-heading"}>
                  <Text
                    text={"From"}
                    size={fonts.fontSize18}
                    weight={500}
                    color={colors.white}
                  />
                  <Input
                    placeholder={"0.0"}
                    type={"number"}
                    size={fonts.fontSize20}
                    value={fromAmountInput.toString()}
                    weight={400}
                    handleChange={(value) => {
                      setfromAmountInput(value);
                      setSearchQuery(value);
                    }}
                  />
                </Flex>

                {/* <Select
                  isSearchable={true}
                  className={"w-100"}
                  options={tokenOptions}
                  components={{
                    DropdownIndicator: () => null,
                    Option: IconOption,
                  }}
                /> */}

                <Flex className={"d-flex align-items-center"}>
                  <CustomDropdown
                    color={isDark ? colors.white : colors.primary}
                    weight={400}
                    options={tokenOptions}
                    selectedToken={selectedFromToken}
                    handleTokenChange={(token) => {
                      setSelectedFromToken(token);
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex className={"convert-icon-div"}>
            <RiSwapFill
              style={{ fontSize: "35px", color: "rgba(255, 255, 255, 0.1)" }}
              onClick={() => {
                revertTokenSelection();
              }}
            />
            {/* <Image src={ConvertedIcon} width="30px" /> */}
          </Flex>
          <Flex className={"receive-div-parent"}>
            <Flex
              className={
                isDark ? `pay-card borderClass` : `pay-card backgroundClass`
              }
            >
              <Flex className="d-flex justify-content-between inner-pay-card">
                <Flex className={" pay-card-heading"}>
                  <Text
                    text={"To (Estimate)"}
                    size={fonts.fontSize16}
                    weight={500}
                    color={colors.white}
                  />
                  <Input
                    placeholder={"0.0"}
                    value={toAmount.toFixed(5)}
                    size={fonts.fontSize20}
                    weight={400}
                    handleChange={(value) => {}}
                    disabled={true}
                  />
                </Flex>

                <Flex className={"d-flex align-items-center"}>
                  <CustomDropdown
                    color={isDark ? colors.white : colors.primary}
                    weight={400}
                    options={tokenOptions}
                    selectedToken={selectedToToken}
                    handleTokenChange={(token) => {
                      setSelectedToToken(token);
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* currency rates section */}
          {amountloader ? (
            <Flex className="d-flex justify-content-around my-3 mt-5">
              <Skeleton width={200} />
              <Skeleton width={200} />
            </Flex>
          ) : (
            <Flex className="d-flex justify-content-around my-3 mt-5">
              <Text
                text={`1  ${selectedFromToken?.symbol} ~ ${(
                  toAmount / fromAmount
                ).toFixed(4)} ${selectedToToken?.symbol}`}
                size={fonts.fontSize16}
                weight={500}
                color={colors.white}
              />

              <Text
                text={`1  ${selectedToToken?.symbol} ~ ${(
                  1 /
                  (toAmount / fromAmount)
                ).toFixed(4)} ${selectedFromToken?.symbol}`}
                size={fonts.fontSize16}
                weight={500}
                color={colors.white}
              />
            </Flex>
          )}

          {/* Tolerance and max received section */}
          <Flex className="d-flex justify-content-between my-3">
            <Text
              text={"Slippage Tolerance"}
              size={fonts.fontSize16}
              weight={500}
              color={colors.white}
            />
            <Text
              text={"0.5%"}
              size={fonts.fontSize16}
              color={colors.white}
              weight={500}
              classes="px-2"
            />
          </Flex>
          <Flex className="d-flex justify-content-between my-3 mb-4">
            <Text
              text={"Minimum Received"}
              size={fonts.fontSize16}
              weight={500}
              color={colors.white}
            />
            <Text
              text={`${toAmount.toFixed(2)} ${selectedToToken?.symbol}`}
              size={fonts.fontSize16}
              color={colors.white}
              weight={500}
              classes="px-2"
            />
          </Flex>

          <Button
            classes={"quote-btn-clr  justify-content-center p-3"}
            btnClasses="mb-3 mb-md-0 quote-btn-clr"
            title={
              walletState.connected ? (
                isLoading ? (
                  <Loader color={"light-blue"} />
                ) : (
                  "Swap"
                )
              ) : (
                "Connect Wallet"
              )
            }
            size={fonts.fontSize15}
            weight={400}
            width={"100%"}
            onClick={() => {
              !isLoading && onSwapClick();
            }}
          />
        </Flex>
      </StyledMarketingSection>
    </SkeletonTheme>
  );
};

const StyledMarketingSection = styled.section`
  padding: 46px;
  padding-top: 20px;
  .btn-box-padding {
    padding: 3px 7px;
  }
  .payment-row {
    .quote-btn-clr {
      background: linear-gradient(281.69deg, #ac32d8 5.12%, #1d2957 95.61%);
    }
    .pay-div-parent,
    .receive-div-parent {
      width: 100%;
    }
    .convert-icon-div {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      margin-bottom: 30px;
      img {
        cursor: pointer;
      }
    }
  }
  .pay-card {
    &.backgroundClass {
      background: ${(props) =>
        props.theme.isDark
          ? "rgba(196, 196, 196, 0.5)"
          : props.theme.gradients.multiColor3};
    }
    box-sizing: border-box;
    border-radius: 13.2692px;
    padding: 1px;
    .inner-pay-card {
      padding: 14px 22px;
      border-radius: 12.2692px;
      background: ${(props) =>
        props.theme.isDark
          ? props.theme.gradients.marketCard
          : props.theme.gradients.whiteGrayGradient};
    }
    .pay-card-heading {
      margin-bottom: 10px;
    }
  }
  .payment-data {
    /* border: 1.99px solid ${(props) =>
      !props.theme.isDark && props.theme.colors.gray}; */
    background: ${(props) =>
      props.theme.isDark
        ? props.theme.gradients.multiColor2
        : props.theme.gradients.buttonBorderDark};
    border-radius: 13.2692px;
    padding: 1px;
    .inner-payment-data {
      padding: 30px 20px;
      background: ${(props) =>
        props.theme.isDark
          ? props.theme.gradients.blue
          : props.theme.gradients.garyWhiteGradinet};
      border-radius: 12.2692px;
    }
    .text1 {
      color: ${(props) => props.theme.colors.purple};
    }
    .text-success {
      color: ${(props) => props.theme.colors.success};
    }
    .vertical-line {
      background: ${(props) => props.theme.gradients.verticalLine};
      width: 2px;
      opacity: 0.1;
      margin: 15px 50px;
    }
    .connent-wallet-btn-row {
      width: 243.77px;
    }
  }
  .cost-row {
    .max-cost,
    .low-cost {
      border-radius: 10.2692px;
      padding: 8px 30px;
      cursor: pointer;
    }
    .active {
      background: ${(props) =>
        props.theme.isDark
          ? props.theme.colors.plumb
          : props.theme.colors.lightFailure};
      color: ${(props) => props.theme.colors.white} !important;
    }
  }

  @media screen and (max-width: 834px) and (min-width: 768px) {
    .payment-data {
      .vertical-line {
        display: none !important;
      }
      .rate-row,
      .estimate-row,
      .save-row {
        width: 100%;
        margin-bottom: 1.5rem;
      }
    }
  }
  ${(props) => props.theme.mediaQueries.maxWidthMD} {
    padding: 26px 20px;

    .payment-row {
      .pay-div-parent,
      .receive-div-parent,
      .convert-icon-div {
        width: 100%;
      }
      .convert-icon-div {
        transform: rotateZ(90deg);
      }
    }
    .cost-row {
      .cost-row-inner {
        display: block;
      }
      .max-cost,
      .low-cost {
        border-radius: 13.2692px;
        padding: 8px 15px;
        cursor: pointer;
        width: 100% !important;
      }
    }
    .payment-data {
      .vertical-line {
        display: none !important;
      }
      .rate-row,
      .estimate-row,
      .save-row {
        width: 100%;
        margin-bottom: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 1520px) and (min-width: 1200px) {
    .custom-width {
      flex: 1 0 50% !important;
      max-width: 67% !important;
    }
    .vertical-line {
      margin: 15px 20px !important;
    }
  }
  @media screen and (max-width: 1199px) and (min-width: 920px) {
    .custom-width {
      flex: 1 0 50% !important;
      max-width: 82% !important;
    }
    .payment-data {
      .vertical-line {
        display: none !important;
      }
      .rate-row,
      .estimate-row {
        width: 50%;
      }
    }
  }
  @media screen and (max-width: 919px) and (min-width: 500px) {
    .custom-width {
      flex: 1 0 50% !important;
      max-width: 100% !important;
    }
  }
  ${(props) => props.theme.mediaQueries.maxWidthSM} {
    .payment-data {
      .rate-row,
      .estimate-row {
        .d-flex {
          div {
            font-size: ${(props) => props.theme.fonts.fontSize15}px;
          }
        }
      }
      .connent-wallet-btn-row {
        .btn-gradient-round {
          width: fit-content !important;
          span {
            font-size: ${(props) => props.theme.fonts.fontSize13}px;
          }
          img {
            width: 30px !important;
            height: 30px !important;
            margin-right: 10px !important;
          }
        }
      }
    }
    .max-low-gas-text {
      font-size: ${(props) => props.theme.fonts.fontSize13}px;
    }
    .max-cost,
    .low-cost {
      img {
        width: 30px !important;
        height: 30px !important;
        margin-right: 10px !important;
      }
    }
  }
`;
