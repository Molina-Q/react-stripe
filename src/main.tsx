import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from './context/ProductsContextProvider.tsx';
import CartContextProvider from './context/CartContextProvider.tsx';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
