import { useContext } from 'react';
import shoppingBag from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';
import { CartContext } from '../../context/CartContextProvider';

const CartIcon = () => {
  const { itemCount } = useContext(CartContext)
  return (
    <div className='cart-container'>
        <img src={shoppingBag} alt="shopping bag" />
        <span className='cart-count'> {itemCount > 0 ? itemCount : 0}</span>
    </div>
  )
}

export default CartIcon