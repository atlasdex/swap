import Metamask from 'components/Svg/Icons/Metamask';
import { ChainId, Config, ConnectorNames } from './types';


const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  }
];

export default connectors;


export const NetworkContextName = 'NETWORK'
 

//export const BASE_URL="https://api.1inch.exchange/v3.0/1/";    
//export const BASE_URL="http://192.168.100.75:3000/";  
export const BASE_URL="https://api.atlasdex.finance/";  
//export const BASE_URL="http://localhost:5000/"; 

 
  
