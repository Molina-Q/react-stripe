import React from 'react'

interface ProductType {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}

const FeaturedProduct = (product: ProductType) => {
    return (
        <div className='featured-product'>
            <div className='featured-image'>
                <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className='name-price'>
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                <button className='button is-black nomad-btn'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default FeaturedProduct