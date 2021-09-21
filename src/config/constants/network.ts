import { NetworksType } from "./types";
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
        disabled: true,
        selectIcon: EthereumIcon,
        chainId: 1
    },
    {
        name: "Binance",
        icon: BinanceIcon,
        disabled: true,
        selectIcon: BinanceIcon,
        chainId: 56
    },
];

export default Networks;
