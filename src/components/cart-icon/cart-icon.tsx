import shoppingBag from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
    <div className='cart-container'>
        <img src={shoppingBag} alt="shopping bag" />
    </div>
  )
}

export default CartIcon