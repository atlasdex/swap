import { Web3Provider } from '@ethersproject/providers';

export const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
  };
