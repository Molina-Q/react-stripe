import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home-page'
import './App.scss'
import NotFound from './components/not-found'
import Shop from './components/pages/shop/shop'
import SingleProduct from './components/single-product/single-product'
import CartPage from './components/pages/cart-page/cart-page'
import Checkout from './components/checkout/checkout'
import Success from './components/checkout/stripe-checkout/success'
import Canceled from './components/checkout/stripe-checkout/cancel'
import SignIn from './components/sign-in/sign-in'
import SignUp from './components/sign-up/sign-up'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
        <Route path='/canceled' element={<Canceled />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App