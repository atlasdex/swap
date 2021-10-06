import { NetworkChainId, WalletTypeArray } from "./types";
import SolletIcon from "assets/images/Sollet-Wallet-Icon.svg";
import MathWalletIcon from "assets/images/MathWallet-Icon.svg";
import MetamaskIcon from "assets/images/metamask.svg";

import {
  MathWalletAdapter,
  PhantomWalletAdapter,
  SolflareExtensionWalletAdapter,
  SolletExtensionAdapter,
} from "../../wallet-adapters";
import { LedgerWalletAdapter } from "wallet-adapters/ledger";
const ASSET_URL =
  'https://cdn.jsdelivr.net/gh/solana-labs/oyster@main/assets/wallets';
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
    {
      name: 'Ledger',
      url: 'https://www.ledger.com',
      icon: `${ASSET_URL}/ledger.svg`,
      adapter: LedgerWalletAdapter,
    },
    {
      name: 'Solflare',
      url: 'https://solflare.com/access-wallet',
      icon: `${ASSET_URL}/solflare.svg`,
    },
    {
      name: 'Solflare Extension',
      url: 'https://solflare.com',
      icon: `${ASSET_URL}/solflare.svg`,
      adapter: SolflareExtensionWalletAdapter,
    },
    {
      name: 'Phantom',
      url: 'https://www.phantom.app',
      icon: `https://www.phantom.app/img/logo.png`,
      adapter: PhantomWalletAdapter,
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
