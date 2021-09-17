import { IToken } from "./IToken";

interface IProtocol {
    name: string,
    part: number,
    fromTokenAddress: string,
    toTokenAddress: string
}
export interface IQuote {
    fromToken: IToken,
    toToken: IToken,
    toTokenAmount: string,
    fromTokenAmount: string,
    protocols: IProtocol[],
    estimatedGas: number

}