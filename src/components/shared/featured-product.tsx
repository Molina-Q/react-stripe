import { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { ProductType } from '../../types';
import './featured-product.styles.scss'
import { isInCart } from '../../helper';

interface FeaturedProductProps {
    product: ProductType;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
    const { addProduct, cartItems } = useContext(CartContext);

    return (
        <div className='featured-product'>
            <div className='featured-image'>
                <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className='name-price'>
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                {
                    !isInCart(product, cartItems) &&
                    <button
                        className='button is-black nomad-btn'
                        onClick={() => addProduct(product)}
                    >
                        ADD TO CART
                    </button>
                }
                {
                    isInCart(product, cartItems) &&
                    <button
                        className='button is-black nomad-btn'
                        onClick={() => addProduct(product)}
                    >
                        ADD MORE
                    </button>
                }
            </div>
        </div>
    )
}

export default FeaturedProduct