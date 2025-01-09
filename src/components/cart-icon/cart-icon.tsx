import { useContext } from 'react';
import shoppingBag from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';
import { CartContext } from '../../context/CartContextProvider';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  const { itemCount } = useContext(CartContext)
  const navigate = useNavigate();
  return (
    <div className='cart-container' onClick={() => navigate('/cart')}>
        <img src={shoppingBag} alt="shopping bag" />
        <span className='cart-count'> {itemCount > 0 ? itemCount : 0}</span>
    </div>
  )
}

export default CartIcon