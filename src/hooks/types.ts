import { PublicKey } from "@solana/web3.js";

export interface AccountInfo {
    publicKey: string | PublicKey;
    walletName: string;
    balance: number;
}