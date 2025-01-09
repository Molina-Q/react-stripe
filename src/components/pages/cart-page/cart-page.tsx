import React, { useContext } from 'react';

import Layout from '../../shared/layout';

import './cart-page.styles.scss';
import { CartContext } from '../../../context/CartContextProvider';
import Total from './total';
import CartItem from './cart-item';

const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease, removeProduct } = useContext(CartContext);
    const funcs = { increase, decrease, removeProduct }
    return (
        <Layout>
            <>
                <h1>Cart</h1>
                {
                    cartItems?.length === 0 ? <div className='empty-cart'>Your Cart is empty</div>
                        :
                        <>
                            <div className='cart-page'>
                                <div className='cart-item-container'>
                                    {
                                        cartItems?.map(item => <CartItem {...item} key={item.id} {...funcs} />)
                                    }
                                </div>
                                {/* <Total itemCount={itemCount} total={total} clearCart={clearCart} /> */}
                            </div>
                        </>
                }
            </>
        </Layout>
    );
}

export default CartPage;