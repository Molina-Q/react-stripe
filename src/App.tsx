import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home-page'
import './App.scss'
import NotFound from './components/not-found'
import Shop from './components/pages/shop/shop'
import SingleProduct from './components/single-product/single-product'
import CartPage from './components/pages/cart-page/cart-page'
import Checkout from './components/checkout/checkout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/checkout' element={<Checkout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App