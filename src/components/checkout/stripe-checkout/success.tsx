import { useContext, useEffect } from 'react';
import Layout from '../../shared/layout';
import { CartContext } from '../../../context/CartContextProvider';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const { clearCart, cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (cartItems?.length !== 0) { clearCart() }
    }, [clearCart, cartItems]);

    return (
        <Layout>
            <div className='checkout'>
                <h1>Thank you for your order</h1>
                <p>We are currently processing your order and
                    will send you a confirmation email shortly
                </p>
                <div>
                    <button className='button is-black nomad-btn submit'
                        onClick={() => navigate('/shop')}>
                        Continue Shopping
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default Success;