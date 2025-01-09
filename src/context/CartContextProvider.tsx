import React from 'react'
import cartReducer, { sumItems } from './CartReducer'
import { CartType, ProductType } from '../types'

interface CartContextProviderProps {
    children: React.ReactNode
}

interface CartContextValue extends CartType {
    addProduct: (product: ProductType) => void,
    increase: (product: ProductType) => void,
    decrease: (product: ProductType) => void,
    removeProduct: (product: ProductType) => void,
    clearCart: () => void
}

export const CartContext = React.createContext<CartContextValue>({
    cartItems: [],
    itemCount: 0,
    total: 0,
    addProduct: () => undefined,
    increase: () => undefined,
    decrease: () => undefined,
    removeProduct: () => undefined,
    clearCart: () => undefined
})

const cartFromStorage = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') as string)
    : [];

const initialState = { cartItems: cartFromStorage, ...sumItems(cartFromStorage) };

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [state, dispatch] = React.useReducer(
        cartReducer as unknown as React.Reducer<CartType, { type: string; payload?: ProductType }>,
        initialState
    )

    const addProduct = (product: ProductType) => {
        dispatch({ type: 'ADD_ITEM', payload: product })
    }
    const increase = (product: ProductType) => {
        dispatch({ type: 'INCREASE', payload: product })
    };

    const decrease = (product: ProductType) => {
        dispatch({ type: 'DECREASE', payload: product })
    };

    const removeProduct = (product: ProductType) => {
        dispatch({ type: 'REMOVE_ITEM', payload: product })
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR' })
    };

    const contextValues: CartContextValue = {
        ...state,
        addProduct,
        increase,
        decrease,
        removeProduct,
        clearCart
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider