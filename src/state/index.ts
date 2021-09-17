import { configureStore, } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import blockReducer from './block'
import ModalReducer from './modal'
import WalletReducer from './wallet'
import TokenReducer from './token' 
import RatesReducer from './rates'
import QuoteReducer from './quote'

const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
        modal: ModalReducer,
        wallet: WalletReducer,
        tokenReducer: TokenReducer,
        ratesReducer: RatesReducer,
        quoteReducer:QuoteReducer
    },
})


/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
