import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../demo/App.tsx'
import './index.css'
import { StoreFactoryContext } from '@palmyralabs/rt-forms'
import storeFactory from './components/Wire/StoreFactory.ts'
import ThemeBlue from '../src/palmyra/theme/blue/ThemeBlue.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreFactoryContext.Provider value={storeFactory}>
      <ThemeBlue/>
      <App />
    </StoreFactoryContext.Provider>
  </React.StrictMode>,
)