import React, { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { ReactNode } from "react";

export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
}
export enum NetworkChainId {
    ETHEREUM = 1,
    BINANCE = 56,
    SOLANA = 4
}
export interface Address {
    97?: string;
    56?: string;
    1?: string;
    4?: string;
}

export interface Token {
    symbol: string;
    address?: Address;
    decimals?: number;
    projectLink?: string;
}

export enum PoolIds {
    poolBasic = "poolBasic",
    poolUnlimited = "poolUnlimited",
}

interface IfoPoolInfo {
    saleAmount: string;
    raiseAmount: string;
    cakeToBurn: string;
    distributionRatio: number; // Range [0-1]
}

export type Images = {
    lg: string;
    md: string;
    sm: string;
    ipfs?: string;
};

export type PageMeta = {
    title: string;
    description?: string;
    image?: string;
};

export interface WalletInfo {
    connector?: AbstractConnector;
    name: string;
    iconURL: string;
    description: string;
    href: string | null;
    color: string;
    primary?: true;
    mobile?: true;
    mobileOnly?: true;
}

export enum ConnectorNames {
    Injected = "injected",
}

export enum PoolCategory {
    "COMMUNITY" = "Community",
    "CORE" = "Core",
    "BINANCE" = "Binance", // Pools using native BNB behave differently than pools using a token
    "AUTO" = "Auto",
}

export interface PoolConfig {
    sousId: number;
    earningToken: Token;
    stakingToken: Token;
    stakingLimit?: number;
    contractAddress: Address;
    poolCategory: PoolCategory;
    tokenPerBlock: string;
    sortOrder?: number;
    harvest?: boolean;
    isFinished?: boolean;
}

export type Login = (connectorId: ConnectorNames) => void;


export type NetworksType = {
    name: string;
    icon: ReactNode;
    selectIcon?: ReactNode;
    disabled: boolean;
};

export type WalletTypeArray = {
    name: string;
    icon: ReactNode;
    url: string;
    selectIcon?: ReactNode;
    adapter?: any;
};

export interface Config {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames;
}

export interface ImageProps {
    onClick?: () => void;
    width?: string;
    height?: string;
    classes?: string
}
