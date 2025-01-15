import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContextProvider'
import FeaturedProduct from '../shared/featured-product';

const FeaturedCollection = () => {
    const { products } = useContext(ProductsContext);
    const featuredProducts = products.slice(0, 4);

    return (
        <div className='featured-collection container'>
            <h2 className='featured-section-title'>Featured Collection</h2>

            <div className='products'>
                {featuredProducts.map(product => (
                    <FeaturedProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedCollection