import { ProductType } from "../types";

interface CartReducerProps {
    state: any;
    action: any;
}

const sumItems = (cartItems: ProductType[]) => {
    const itemCount = cartItems.reduce((total: number, product: ProductType) => total + (product.quantity ? product.quantity : 0), 0);
    const total = cartItems.reduce((total: number, product: ProductType) => total + product.price * (product.quantity ? product.quantity : 0), 0);
    return { itemCount, total };
}

const cartReducer = ({ state, action }: CartReducerProps) => {
    switch (action.type) {

        case 'ADD_ITEM':
            // check if item is in cart
            if (!state.cartItems.find((item: ProductType) => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        default:
            return state;
    }
}

export default cartReducer;