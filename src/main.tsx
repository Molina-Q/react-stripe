import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from './context/ProductsContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
