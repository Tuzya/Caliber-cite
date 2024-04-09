'use client'

import {Provider} from 'react-redux'
import { store } from './src/store'
import { operativesApi } from './api/operativesApi'
import { ApiProvider } from '@reduxjs/toolkit/query/react'



export function Providers ({children}: any) {
    return (
        <ApiProvider api={operativesApi} > 
        <Provider store={store}>
                {children}
        </Provider>
            </ApiProvider> 
    )
}