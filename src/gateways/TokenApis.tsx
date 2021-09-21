

import { useGetNetworkChainState } from 'state/hooks';
import HttpClient from './HttpClient'
async function getTokens(chainId: number) {
    // let chainId = useGetNetworkChainState();
    try {
        const result = await HttpClient.get(`/tokens?chainId=${chainId}`);
        return result;
    } catch (error) {
        console.log(error);
    }

}
async function getRates() {
    try {
        const result = await HttpClient.get('https://token-prices.1inch.io/v1.1/1');
        return result.data;
    } catch (error) {
        console.log(error);
    }

}
async function getQuote(fromTokenAddress: string, toTokenAddress: string, amount: string, chainId: number) {
    try {
        
        const result = await HttpClient.get(`tokens/quote?chainId=${chainId}&fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}`);

        return result.data;
    } catch (error) {
        console.log(error);
    }

}
export {
    getTokens,
    getRates,
    getQuote
};