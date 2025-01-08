import React from 'react'
import cartReducer from './CartReducer';
import { ProductType } from './ProductsContextProvider';


interface CartContextProviderProps {
    children: React.ReactNode;
}

type CartItemType = {
    cartItems: [];
    itemCount: number;
    total: number;
};

export const CartContext = React.createContext<CartItemType>({
    cartItems: [],
    itemCount: 0,
    total: 0,
});

const initialState: CartItemType = {
    cartItems: [],
    itemCount: 0,
    total: 0,
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [state, dispatch] = React.useReducer(
        cartReducer as unknown as React.Reducer<CartItemType, { type: string; payload?: ProductType }>,
        initialState
    );
    const addProduct = (product: ProductType) => dispatch({ type: 'ADD_ITEM', payload: product });
    const contextValues = {
        ...state,
        addProduct,
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;