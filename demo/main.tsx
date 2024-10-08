import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../demo/App.tsx'
import './index.css'
import '../src/palmyra/template/Layout.css'
import { StoreFactoryContext } from '@palmyralabs/rt-forms'
import storeFactory from './components/Wire/StoreFactory.ts'
import { ThemeBlue } from '../src/blue.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreFactoryContext.Provider value={storeFactory}>
      <ThemeBlue />
      <App />
    </StoreFactoryContext.Provider>
  </React.StrictMode>,
)