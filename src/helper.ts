import { CartType, CartItemType, ProductType } from "./types";

export const isInCart = (product: ProductType, cart: CartItemType[] | undefined) => {
    if (!cart) return false;
    return cart.find((item) => item.id === product.id);
}