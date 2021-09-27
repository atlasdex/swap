import { useCallback, useEffect, useMemo, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import WALLET_PROVIDERS from 'config/constants/walletProviders';
import { getWeb3NoAccount } from './web3';

export function isValidPublicKey(key) {
  if (!key) {
    return false;
  }
  try {
    new PublicKey(key);
    return true;
  } catch {
    return false;
  }
}

const localStorageListeners = {};

export function useLocalStorageStringState(
  key: string,
  defaultState: string | null = null,
): [string | null, (newState: string | null) => void] {
  const state = localStorage.getItem(key) || defaultState;

  const [, notify] = useState(key + '\n' + state);

  useEffect(() => {
    if (!localStorageListeners[key]) {
      localStorageListeners[key] = [];
    }
    localStorageListeners[key].push(notify);
    return () => {
      localStorageListeners[key] = localStorageListeners[key].filter(
        (listener) => listener !== notify,
      );
      if (localStorageListeners[key].length === 0) {
        delete localStorageListeners[key];
      }
    };
  }, [key]);

  const setState = useCallback<(newState: string | null) => void>(
    (newState) => {
      const changed = state !== newState;
      if (!changed) {
        return;
      }

      if (newState === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, newState);
      }
      localStorageListeners[key].forEach((listener) =>
        listener(key + '\n' + newState),
      );
    },
    [state, key],
  );

  return [state, setState];
}

export function useLocalStorageState<T = any>(
  key: string,
  defaultState: T | null = null,
): [T, (newState: T) => void] {
  let [stringState, setStringState] = useLocalStorageStringState(
    key,
    JSON.stringify(defaultState),
  );
  return [
    useMemo(() => stringState && JSON.parse(stringState), [stringState]),
    (newState) => setStringState(JSON.stringify(newState)),
  ];
}

/**
 * Show Address in short form
 * @param address 
 * @param size 
 * @returns 
 */
export const abbreviateAddress = (address : any, size = 4) => {
  return address?.slice(0, size) + '…' + address?.slice(-size);
}

/**
 * This return wallet provider object
 * @param providerUrl 
 * @returns 
 */
export const getProvider = (providerUrl :string) =>{
  const provider = WALLET_PROVIDERS.find(({ url }) => url === providerUrl)
  return provider;
}

export const stringToBoolean = string => {
  switch (string && string.toLowerCase().trim()) {
    case 'true':
    case 'yes':
    case '1':
    case 1:
      return true
    case 'false':
    case 'no':
    case '0':
    case 0:
    case null:
      return false
    default:
      return Boolean(false)
  }
}

export function toHex(number: any, length = 32) {
  const str =
    number instanceof Buffer
      ? number.toString('hex')
      : BigInt(number).toString(16);
  return '0x' + str.padStart(length * 2, '0');
}

/**
 * Waits for transaction to be mined
 * @param txHash Hash of transaction
 * @param attempts
 * @param delay
 */
 export const waitForTxReceipt = (
  txHash: string,
  attempts = 60,
  delay = 1000
) => {
  const web3 = getWeb3NoAccount()

  return new Promise((resolve, reject) => {
    const checkForTx = async (txHash: any, retryAttempt = 0) => {
      const result = await web3.eth.getTransactionReceipt(txHash);
      if (!result || !result.blockNumber) {
        if (retryAttempt <= attempts) {
          setTimeout(() => checkForTx(txHash, retryAttempt + 1), delay);
        } else {
          reject(new Error('tx was not mined'));
        }
      } else {
        resolve(result);
      }
    };
    checkForTx(txHash);
  });
};
