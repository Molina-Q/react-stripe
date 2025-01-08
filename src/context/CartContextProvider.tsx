import React from 'react'
import cartReducer from './CartReducer';

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
    const [state, dispatch] = React.useReducer(cartReducer, initialState);
    const contextValues: CartItemType = {
        ...state,
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;