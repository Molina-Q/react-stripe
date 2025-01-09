import { ProductType } from '../../../types';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../icons';

interface CartItemProps extends ProductType {
    quantity?: number
    increase: (product: ProductType) => void
    decrease: (product: ProductType) => void
}

const CartItem: React.FC<CartItemProps> = ({
    id,
    title,
    description,
    imageUrl,
    price,
    quantity = 0,
    increase,
    decrease,
}) => {
    const product = { title, imageUrl, price, quantity, id, description } as ProductType;

    return (
        <div className='cart-item'>
            <div className='item-image'>
                <img src={imageUrl} alt='product' />
            </div>
            <div className='name-price'>
                <h4>{title}</h4>
                <p>${price}</p>
            </div>
            <div className='quantity'>
                <p>{`Quantity: ${quantity}`}</p>
            </div>
            <div className='btns-container'>
                <button
                    className='btn-increase' onClick={() => increase(product)}>
                    <PlusCircleIcon width='20px' />
                </button>
                {
                    quantity === 1 &&
                    <button
                        className='btn-trash'>
                        <TrashIcon width='20px' />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button
                        className='btn-decrease' onClick={() => decrease(product)}>
                        <MinusCircleIcon width='20px' />
                    </button>
                }
            </div>
        </div>
    );
}

export default CartItem;