import { createContext, ReactNode, useState } from 'react'
import SHOP_DATA from '../components/shop'

interface ProductType  {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}

type ProductsContextValue = {
    products: ProductType[];
};

type ProductsContextProviderProps = {
    children: ReactNode;
};

export const ProductsContext = createContext<ProductsContextValue>({
    products: [],
});

const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
    const [products] = useState<ProductType[]>(SHOP_DATA);
    return (
        <ProductsContext.Provider value={{ products }} >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider