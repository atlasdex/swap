
import HttpClient from './HttpClient'
async function getTokens(chainId: number) {
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
async function tokenSwap(fromTokenAddress: string, toTokenAddress: string, amount: string, chainId: number, fromAddress: string, slippage: number) {

        const result = await HttpClient.get(`tokens/swap?chainId=${chainId}&fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}&fromAddress=${fromAddress}&slippage=${slippage}`);
        // const result = await HttpClient.get(`https://api.1inch.exchange/v3.0/${chainId}/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}&fromAddress=${fromAddress}&slippage=1`);
        // const result = await HttpClient.get('https://api.1inch.exchange/v3.0/1/swap?fromTokenAddress=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&toTokenAddress=0x6b175474e89094c44da98b954eedeac495271d0f&amount=100000000000000000000&fromAddress=0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5&slippage=1');
        return result;

}
export {
    getTokens,
    getRates,
    getQuote,
    tokenSwap
};