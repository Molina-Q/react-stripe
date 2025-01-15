import { useContext, useState } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../context/CartContextProvider';
import Layout from '../shared/layout';
import StripeCheckout from './stripe-checkout/stripe-checkout';
import ShippingAddress, { ShippingValues } from './custom-checkout/shipping-address';
import CustomCheckout from './custom-checkout/custom-checkout';

const Checkout = () => {
    const { itemCount, total, cartItems } = useContext(CartContext);
    const [shipping, setShipping] = useState<ShippingValues | null>(null);
    const addressShown = {
        display: (shipping ? 'none' : 'block')
    }

    const cardShown = {
        display: (shipping ? 'block' : 'none')
    }

    return (
        <Layout>
            <div className='checkout'>
                <h2>Checkout Summary</h2>
                <h3>{`Total Items: ${itemCount}`}</h3>
                <h4>{`Amount to Pay: $${total}`}</h4>
                <StripeCheckout />
                <div style={addressShown}>
                    <ShippingAddress setShipping={setShipping} />
                </div>
                <div style={cardShown}>
                    <CustomCheckout shipping={shipping} cartItems={cartItems!} />
                </div>
            </div>
        </Layout>
    );
}

export default Checkout;