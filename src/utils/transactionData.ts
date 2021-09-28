import { ethers } from 'ethers';

export const getTransactionData = async (
    transaction: any,
    walletAddress: string,
    library: any
) => {
    if (walletAddress && transaction && library) {
        const {
            to,
            data,
            value,
            createOnFailedDeposit = false,
        } = transaction;
        const transactionEstimate = {
            to,
            data,
            value,
            from: walletAddress,
        };
        let gasPrice = null;
        let gasLimit = null;
        let estimateFailed = false;
        try {
            gasPrice = await library
                .getSigner()
                .provider.getGasPrice(transactionEstimate);
        } catch (e) {
            estimateFailed = true;
            console.log(e);
        }
        if (!estimateFailed) {
            const transactionSend: any = {
                to,
                data,
                value
            };
            if (gasPrice) {
                transactionSend.gasPrice = ethers.utils.parseUnits(
                    Number(ethers.utils.formatUnits(gasPrice, 'gwei')).toString(),
                    'gwei'
                );
            } else {
                transactionSend.gasPrice = 70;
            }

            if (gasLimit) {
                transactionSend.gasLimit = gasLimit.add(5000);
            }
            return transactionSend;
        } else {
            return false;
        }
    }
};