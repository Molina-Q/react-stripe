import { createContext, ReactNode, useState } from 'react'
import SHOP_DATA from '../shop'
import { ProductType } from '../types';

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