

import HttpClient from './HttpClient'

async function getTokens() {

    try {
        const result = await HttpClient.get('tokens');

        return result.data.tokens;
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
        
        const result = await HttpClient.get(`quote?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}`);
        
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