import { NetworkChainId, NetworksType } from "./types";
import SolanaIcon from "assets/images/Solana-Icon.svg";
import BinanceIcon from "assets/images/binance.svg";
import EthereumIcon from "assets/images/ethereum.svg";

// import { EthereumIcon, BinanceIcon , SolonaIcon } from "components/Svg";
import SolanaSelectedIcon from "assets/images/Solana-Selected-Icon.svg";

const Networks: NetworksType[] = [
  // {
  //     name: "Solana",
  //     icon: SolanaIcon,
  //     disabled: false,
  //     selectIcon: SolanaSelectedIcon,
  //     chainId: 4
  // },
  {
    name: "Ethereum",
    icon: EthereumIcon,
    selectIcon: EthereumIcon,
    chainName: 'ethereum',
    chainId: NetworkChainId.ETHEREUM,
    rpcUrls: [],
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    blockExplorerUrls: ['https://etherscan.io'],
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  {
    name: "Binance",
    icon: BinanceIcon,
    selectIcon: BinanceIcon,
    chainId:  NetworkChainId.BINANCE,
    chainName: 'binance-smart-chain',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18,
      },
      rpcUrls: [
        'https://bsc-dataseed.binance.org/',
        'https://bsc-dataseed1.defibit.io/',
        'https://bsc-dataseed1.ninicoin.io/',
      ],
      blockExplorerUrls: ['https://bscscan.com/'],
      address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
  },
];


export default Networks;
