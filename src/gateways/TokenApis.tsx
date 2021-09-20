

import { useGetNetworkChainState } from 'state/hooks';
import HttpClient from './HttpClient'
async function getTokens() {  
   // let chainId = useGetNetworkChainState();
    try {
        const result = await HttpClient.get('/tokens?chainId=1'); 
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
async function getQuote(fromTokenAddress: string, toTokenAddress: string, amount: string) {
    try { 
        //let chainId = useGetNetworkChainState();
        const result = await HttpClient.get(`tokens/quote?chainId=1&fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}`);

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