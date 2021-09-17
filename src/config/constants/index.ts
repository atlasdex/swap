import Metamask from 'components/Svg/Icons/Metamask';
import { Config, ConnectorNames } from './types';


const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  }
];

export default connectors;


export const NetworkContextName = 'NETWORK'
 

export const BASE_URL="https://api.1inch.exchange/v3.0/1/";    

  
