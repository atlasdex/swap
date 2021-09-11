import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { getLibrary } from 'utils/web3React'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import store from 'state'
import { ModalProvider } from 'widgets/Modal'
import { NetworkContextName } from 'config/constants'
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
      <Provider store={store}>
          <HelmetProvider>
            <ThemeContextProvider>
                <RefreshContextProvider>
                  <ModalProvider>                    
                      {children}
                  </ModalProvider>
                </RefreshContextProvider>
            </ThemeContextProvider>
          </HelmetProvider>
      </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers
