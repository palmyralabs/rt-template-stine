import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../demo/App.tsx'
import './index.css'
import { StoreFactoryContext } from '@palmyralabs/rt-forms'
import { PalmyraStoreFactory, StoreFactory } from '@palmyralabs/palmyra-wire'

const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/data/' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreFactoryContext.Provider value={storeFactory}>
    <App />
    </StoreFactoryContext.Provider>
  </React.StrictMode>,
)
  