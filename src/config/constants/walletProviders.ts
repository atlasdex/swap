import { NetworkChainId, WalletTypeArray } from "./types";
import SolletIcon from "assets/images/Sollet-Wallet-Icon.svg";
import MathWalletIcon from "assets/images/MathWallet-Icon.svg";
import MetamaskIcon from "assets/images/metamask.svg";

import {
  MathWalletAdapter,
  SolletExtensionAdapter,
} from "../../wallet-adapters";

const WALLET_PROVIDERS: any = {
  [NetworkChainId.SOLANA]: [
    {
      name: "Sollet Extension",
      url: "https://www.sollet.io/extension",
      icon: SolletIcon,
      adapter: SolletExtensionAdapter as any,
    },
    {
      name: "Sollet.io",
      url: "https://www.sollet.io",
      icon: SolletIcon,
    },
    {
      name: "MathWallet",
      url: "https://www.mathwallet.org",
      icon: MathWalletIcon,
      adapter: MathWalletAdapter,
    },
  ],
  [NetworkChainId.ETHEREUM]: [
    {
      name: "Metamask",
      url: "",
      icon: MetamaskIcon,
    },
  ],
  [NetworkChainId.BINANCE]: [
    {
      name: "Metamask",
      url: "",
      icon: MetamaskIcon,
    },
  ],
};

export default WALLET_PROVIDERS;
