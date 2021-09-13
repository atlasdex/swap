

import HttpClient from './HttpClient'

async function getTokens() {

    try {
        const result = await HttpClient.get('tokens');

        return result.data;
    } catch (error) {
        console.log(error);

    }

}
async function getBalance() {

    try {

        const result = await HttpClient.get('tokens');

        return result.data;
    } catch (error) {
        console.log(error);

    }

}
async function getRoutes(fromTokenAddress: string, toTokenAddress: string, amount: number) {

    try {

        const result = await HttpClient.get('quote?fromTokenAddress=' + fromTokenAddress + '&=toTokenAddress=' + toTokenAddress + '&amount=' + amount);

        return result.data;
    } catch (error) {
        console.log(error);

    }

}

export {
    getTokens,
    getBalance,
    getRoutes
};